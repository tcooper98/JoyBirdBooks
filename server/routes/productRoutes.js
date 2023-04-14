import express from 'express';
import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import { protectRoute, admin } from '../middleware/authMiddleware.js';

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  const { genre, category, age } = req.query;

  // console.log(req.query);

  const query = {};

  if (genre) {
    query.genre = { $regex: genre, $options: 'i' };
  }

  if (category) {
    query.category = { $regex: category, $options: 'i' };
  }

  if (age) {
    query.age = { $regex: age, $options: 'i' };
  }

  const products = await Product.find(query);

  // console.log(products);

  res.json(products);
}

const getProduct = async (req, res) => {
  
  const product = await Product.findById(req.params.id);

  if(product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment, userId, title } = req.body;

  const product = await Product.findById(req.params.id);

  const user = await User.findById(userId);

  if (product) {
    const alreadyReviewed = product.reviews.find((rev) => rev.user.toString() === user._id.toString());

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed.');
    }

    const review = {
      name: user.name,
      rating: Number(rating),
      comment,
      title,
      user: user._id,
    };

    product.reviews.push(review);

    product.numberOfReviews = product.reviews.length;
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review has been saved.' });
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
});

const createNewProduct = asyncHandler(async (req, res) => {
  const { name, image, category, stock, price, productIsNew, description, status, author, genre, age, condition,  } = req.body;

  const newProduct = await Product.create({
    name,
    category,
    stock,
    price,
    image: '/images/' + image,
    productIsNew,
    description,
    status,
    author,
    genre,
    age,
    condition,
  });
  await newProduct.save();

  const products = await Product.find({});

  if (newProduct) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error('Product could not be added.');
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, image, category, stock, price, id, productIsNew, description, status, author, genre, age, condition,  } = req.body;

  const product = await Product.findById(id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = '/images/' + image;
    product.category = category;
    product.stock = stock;
    product.productIsNew = productIsNew;
    product.status = status;
    product.author = author;
    product.genre = genre;
    product.age = age;
    product.condition = condition;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
});

const removeProductReview = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId);

  const updatedReviews = product.reviews.filter((rev) => rev._id.valueOf() !== req.params.reviewId);

  if (product) {
    product.reviews = updatedReviews;

    product.numberOfReviews = product.reviews.length;

    if (product.numberOfReviews > 0) {
      product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    } else {
      product.rating = 1;
    }

    await product.save();
    res.status(201).json({ message: 'Review hass been removed.' });
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
});

productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);
productRoutes.get('/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  const products = await Product.find({
    $or: [
     {name: { $regex: keyword, $options: 'i' } },
      {description: { $regex: keyword, $options: 'i' } },
      {author: { $regex: keyword, $options: 'i' } },
      {condition: { $regex: keyword, $options: 'i' } },
      {age: { $regex: keyword, $options: 'i' } },
      {category: { $regex: keyword, $options: 'i' } },
      {genre: { $regex: keyword, $options: 'i' } },
      {status: { $regex: keyword, $options: 'i' } },
    ],
    });
      res.json(products);
});
productRoutes.route('/reviews/:id').post(protectRoute, createProductReview);
productRoutes.route('/:id/reviews').post(getProduct);
productRoutes.route('/').put(protectRoute, admin, updateProduct);
productRoutes.route('/:id').delete(protectRoute, admin, deleteProduct);
productRoutes.route('/').post(protectRoute, admin, createNewProduct);
productRoutes.route('/:productId/:reviewId').put(protectRoute, admin, removeProductReview);



export default productRoutes;