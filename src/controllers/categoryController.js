const categoryService = require('../services/categoryService');

const ERROR_MESSAGE = 'Server error';

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const resultCategory = await categoryService.createCategory(name);
    if (resultCategory.message) {
      return res.status(409).json(resultCategory);
    }

    return res.status(201).json(resultCategory);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const resultCategories = await categoryService.getAllCategories();
    if (resultCategories.message) {
      return res.status(409).json(resultCategories);
    }

    return res.status(200).json(resultCategories);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};