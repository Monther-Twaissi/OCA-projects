import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';
import uploadImage from '../utils/uploadImage.js';
import deleteImage from '../utils/deleteImage.js';
import fs from 'fs';

const createCategory = asyncHandler(async (req, res) => {
  let oldPath;
  const { categoryName, categoryColor } = req.body;
  if (req.files.categoryImage) {
    oldPath = req.files.categoryImage.path;
  }

  const category = await Category.findOne({ categoryName: categoryName });

  if (!category) {
    let categoryImage = '';
    if (oldPath) {
      categoryImage = await uploadImage(oldPath);
    }

    const category = await Category.create({
      categoryName: categoryName,
      categoryImage: categoryImage,
      categoryColor: categoryColor,
    });

    if (category) {
      res.status(201).json({
        categoryName: category.categoryName,
        categoryImage: category.categoryImage,
        categoryColor: category.categoryColor,
      });
    }
  } else {
    res.status(400);
    throw new Error('category name already exists');
  }
});

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({}).exec();
  res.status(201).json(categories);
});

const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    deleteImage(category.categoryImage);
    await category.remove();
    res.json({ message: 'Category Removed' });
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  let newPath;
  const { categoryName, categoryColor } = req.body;
  if (req.files.categoryImage) {
    newPath = req.files.categoryImage.path;
  }

  const category = await Category.findById(req.params.id);
  console.log(req.files.categoryImage.path);
  if (category) {
    let categoryImage = '';
    if (fs.statSync(req.files.categoryImage.path).size != 0) {
      categoryImage = await uploadImage(newPath);
      deleteImage(category.categoryImage);
    } else {
      categoryImage = category.categoryImage;
    }
    category.categoryName = categoryName;
    category.categoryColor = categoryColor;
    category.categoryImage = categoryImage;

    const updatedCategory = await category.save();

    res.status(201).json(updatedCategory);
  } else {
    res.status(404);
    throw new Error('category not found');
  }
});

export {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
