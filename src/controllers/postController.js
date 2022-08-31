const postService = require('../services/postService');

const ERROR_MESSAGE = 'Server error';

const createPost = async (req, res) => {
  const dataPost = req.body;
  const { authorization } = req.headers;

  try {
  const resultCategory = await postService.checkCategoryExists(dataPost.categoryIds);
  if (resultCategory.message) {
    return res.status(400).json(resultCategory);
  }

  if (resultCategory) {
    const resultPost = await postService.createPost(dataPost, authorization);
    return res.status(201).json(resultPost);
  }
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
  const resultBlogPost = await postService.getAllBlogPosts();
  if (resultBlogPost.message) {
    return res.status(400).json(resultBlogPost);
  }

  return res.status(200).json(resultBlogPost);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createPost,
  getAllBlogPosts,
};