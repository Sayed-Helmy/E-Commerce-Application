const asyncWrapper = require("../middlewares/asyncwrapper");
const Category = require("../models/Category");

const getAllCategories = asyncWrapper(async (req, res) => {
  const categories = await Category.find({});
  res.status(201).json(categories);
});

const getSingleCategory = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findById(id);
  res.status(200).json(category);
});

const createCategory = asyncWrapper(async (req, res) => {
  const category = await Category.create({ ...req.body });
  res.status(201).json(category);
});

const updateCategory = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    { new: true }
  );
  res.status(201).json(category);
});

const deleteCategory = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findByIdAndDelete(id);
  res.status(200).json(category);
});

module.exports = {
  getAllCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
