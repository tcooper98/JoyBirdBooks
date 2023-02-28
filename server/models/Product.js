import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    title: { type: String, required: true },
    username: {type: String, required: true},
})

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
      image:{
        type: String,
        required: true
    },
      author:{
        type: String,
        required: true
    },
      category:{
        type: String,
        required: true
    },
      genre:{
        type: String,
        required: true
    },
      description:{
        type: String,
        required: true
    },
     age:{
        type: String,
        required: true
    },
    condition:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default:0
    },
    stock:{
        type: Number,
        required: true,
        default: 0
    },
    ProductIsNew:{
        type: Boolean,
        default: false
    },
     reviews:[reviewSchema],
     rating:{
        type: Number,
        required: true,
        default:0
     },
      numberofReviews:{
        type: Number,
        required: true
    },
},{timestamps: true})

const Product = mongoose.model('Product', ProductSchema);

export default Product;