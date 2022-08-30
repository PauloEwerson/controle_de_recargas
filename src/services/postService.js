const {
  // PostCategory,
  Category,
} = require('../database/models');

const checkCategoryExists = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (count !== categoryIds.length) {
    return { message: '"categoryIds" not found' };
  }
  return true;
};

// const createPost = async (dataPost) => {

//   await PostCategory.create(dataPost);

//   return true;
// };

module.exports = {
  checkCategoryExists,
  // createPost,
};