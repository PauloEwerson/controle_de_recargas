const Sequelize = require('sequelize');
const {
  Category,
  BlogPost,
  PostCategory,
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

module.exports = {
  checkCategoryExists,
  createPost,
};