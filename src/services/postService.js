const {
  Category,
  BlogPost,
} = require('../database/models');

const checkUserLogged = require('../helpers/checkUserLogged');

const checkCategoryExists = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (count !== categoryIds.length) {
    return { message: '"categoryIds" not found' };
  }
  return true;
};

const createPost = async (dataPost, authorization) => {
  const { title, content } = dataPost;
  const dataToken = await checkUserLogged(authorization);
    const { dataValues } = await BlogPost.create(
      { title, content, userId: dataToken.id },
    );
  return dataValues;
};

module.exports = {
  checkCategoryExists,
  createPost,
};