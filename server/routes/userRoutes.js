import express from 'express';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';


const userRoutes = express.Router();


const genToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: '60d' });
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(401).send('Cannot find user with that email or password.');
  }
});

// POST register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400)
    throw new Error('An account with this email already exists. Please login in or use a different email address.');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(400)
    throw new Error('Something went wrong. Please check your data and try again.');
  }
});


userRoutes.route('/login').post(loginUser);
userRoutes.route('/register').post(registerUser);
userRoutes.route('/').get(asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
}));


export default userRoutes;