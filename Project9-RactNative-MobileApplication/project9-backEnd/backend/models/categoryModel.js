import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// category schema model.
const categoriesSchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    categoryImage: {
      type: String,
      required: true,
    },
    categoryColor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categoriesSchema);

export default Category;
