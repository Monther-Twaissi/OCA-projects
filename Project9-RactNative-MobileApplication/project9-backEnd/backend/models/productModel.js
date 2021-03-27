import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// user schema model.
const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productDescription: {
      type: String,
      default: 'No description yet',
    },
    category: {
      type: Object,
      required: true,
    },
    catID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    timesOrdered: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ productName: 'text' });

const Product = mongoose.model('Product', productSchema);

export default Product;
