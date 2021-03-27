import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import uploadImage from '../utils/uploadImage.js';
import deleteImage from '../utils/deleteImage.js';
import fs from 'fs';

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).exec();

  res.status(201).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  let oldPath;
  const {
    productName,
    productPrice,
    productDescription,
    categoryID,
  } = req.body;
  if (req.files.productImage) {
    oldPath = req.files.productImage.path;
  }

  const product = await Product.findOne({ productName: productName });

  if (!product) {
    let productImage = '';
    if (oldPath) {
      productImage = await uploadImage(oldPath);
    }

    const category = await Category.findById(categoryID);

    const product = await Product.create({
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      category: category,
      productImage: productImage,
      catID: categoryID,
    });

    if (product) {
      res.status(201).json({
        productName: product.productName,
        productPrice: product.productPrice,
        productDescription: product.productDescription,
        category: product.category,
        productImage: product.productImage,
      });
    }
  } else {
    res.status(400);
    throw new Error('Product name already exists');
  }
});

const getCategoryProducts = asyncHandler(async (req, res) => {
  const categoryID = req.params.id;
  const products = await Product.find({ catID: categoryID }).exec();

  res.status(201).json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    deleteImage(product.productImage);
    await product.remove();
    res.json({ message: 'Product Removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  let newPath;
  const {
    productName,
    productPrice,
    productDescription,
    categoryID,
  } = req.body;
  if (req.files.productImage) {
    newPath = req.files.productImage.path;
  }

  const product = await Product.findById(req.params.id);

  if (product) {
    let productImage = '';
    if (fs.statSync(req.files.productImage.path).size != 0) {
      productImage = await uploadImage(newPath);
      deleteImage(product.productImage);
    } else {
      productImage = product.productImage;
    }
    product.productName = productName;
    product.productPrice = productPrice;
    product.productImage = productImage;
    product.productDescription = productDescription;

    if (categoryID != product.category._id) {
      const category = Category.findById(categoryID);
      product.category = category;
      product.catID = categoryID;
    }

    const updatedProduct = await product.save();

    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const findProductByName = asyncHandler(async (req, res) => {
  const products = await Product.find({ $text: { $search: req.params.name } });

  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error(`No products found with this name ${req.params.name}`);
  }
});

const getPopularProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ timesOrdered: -1 }).limit(9);

  res.json(products);
});

export {
  getAllProducts,
  createProduct,
  getCategoryProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  findProductByName,
  getPopularProducts,
};
