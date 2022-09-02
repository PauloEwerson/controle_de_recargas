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

const getAllBlogPosts = async (_req, res) => {
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

const getByIdBlogPost = async (req, res) => {
  const { id } = req.params;

  try {
  const resultBlogPostById = await postService.getByIdBlogPost(id);

  if (resultBlogPostById.message) {
    return res.status(404).json(resultBlogPostById);
  }

  return res.status(200).json(resultBlogPostById[0]);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  // const { title, content } = req.body;

  try {
    const resultCheckPost = await postService.checkPostExists(id);
    if (resultCheckPost.message) {
      return res.status(401).json(resultCheckPost);
    }
    const resultCheckUser = await postService.checkSameUser(authorization, resultCheckPost);
    if (resultCheckUser.message) {
      return res.status(401).json(resultCheckUser);
    }
  // const resultUpdatePost = await postService.updatePost(title, content);

  // if (resultBlogPostById.message) {
  //   return res.status(404).json(resultBlogPostById);
  // }

  return res.status(200).json(resultCheckUser);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createPost,
  getAllBlogPosts,
  getByIdBlogPost,
  updatePost,
};