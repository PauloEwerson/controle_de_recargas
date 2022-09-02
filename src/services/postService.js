const Sequelize = require('sequelize');
const {
  Category,
  BlogPost,
  PostCategory,
  User,
} = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const checkUserLogged = require('../helpers/checkUserLogged');

const checkCategoryExists = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (count !== categoryIds.length) {
    return { message: '"categoryIds" not found' };
  }
  return true;
};

const createPost = async (dataPost, authorization) => {
  const { title, content, categoryIds } = dataPost;
  const dataToken = await checkUserLogged(authorization);

  // inicia a transação
  const t = await sequelize.transaction();

  const { dataValues } = await BlogPost.create(
    { title, content, userId: dataToken.id },
    { transaction: t },
  );

  await PostCategory.bulkCreate(
    categoryIds.map((id) => ({ postId: dataValues.id, categoryId: id })),
    { transaction: t },
  );

  // finaliza a transação
  await t.commit();

  return dataValues;
};

const getAllBlogPosts = async () => {
  const resultAllUsers = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (resultAllUsers.length === 0) {
    return { message: 'There are no records' };
  }

  return resultAllUsers;
};

const getByIdBlogPost = async (id) => {
  const resultAllUsers = await BlogPost.findAll(
    { where: { id },
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);

  if (resultAllUsers.length === 0) {
    return { message: 'Post does not exist' };
  }

  return resultAllUsers;
};

const checkPostExists = async (id) => {
  const resultBlogPost = await BlogPost.findAll({ where: { id } });
  if (resultBlogPost.length === 0) {
    return { message: '"BlogPost" not found' };
  }
  return true;
};

module.exports = {
  checkCategoryExists,
  createPost,
  getAllBlogPosts,
  getByIdBlogPost,
  checkPostExists,
};