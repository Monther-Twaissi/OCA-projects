import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });

  if (user && (await user.matchPassword(password))) {
    res.json({ token: generateToken(user) });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  let { username, password } = req.body;
  let userExists;

  if (username && password) {
    userExists = await User.findOne({ username: username });
  } else {
    username = 'Guest' + Date.now();
    password = Date.now();
  }

  if (userExists) {
    res.status(400);
    throw new Error('username already exists');
  }

  const user = await User.create({
    username: username,
    password: password,
  });

  if (user) {
    res.status(201).json({
      token: generateToken(user),
    });
  }
});

const makeUserOrder = asyncHandler(async (req, res) => {
  const { order } = req.body;
  const userID = req.params.id;
  const user = await User.findById(userID).select('-password');
  const products = order.products;
  const totalPrice = order.totalPrice;
  const address = order.address;

  const newOrder = {
    products: products,
    totalPrice: totalPrice,
    address: address,
  };

  if (user) {
    products.forEach(async (element) => {
      const product = await Product.findById(element._id);
      product.timesOrdered++;
      product.save();
    });
    user.orders.push(newOrder);
    const updatedUser = await user.save();
    res.status(201).json(updatedUser);
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find({});

  res.status(201).json(allUsers);
});

const createNewUser = asyncHandler(async (req, res) => {
  let { username, password, isAdmin } = req.body;
  let userExists;

  if (username && password) {
    userExists = await User.findOne({ username: username });
  } else {
    username = 'Guest' + Date.now();
    password = Date.now();
  }

  if (userExists) {
    res.status(400);
    throw new Error('username already exists');
  }

  const user = await User.create({
    username: username,
    password: password,
    isAdmin: isAdmin,
  });

  if (user) {
    res.status(201).json('user created successfully');
  }
});

export { authUser, registerUser, makeUserOrder, getAllUsers, createNewUser };
