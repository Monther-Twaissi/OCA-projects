import jwt from 'jsonwebtoken';

// Generating new token
// for (logged in user or registered user)
const generateToken = (user) => {
  const { _id, username, orders, address, isAdmin } = user;
  return jwt.sign(
    { _id, username, orders, address, isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: '5d' }
  );
};

export default generateToken;
