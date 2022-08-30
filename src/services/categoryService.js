const { Category } = require('../database/models');

const createCategory = async (name) => {
  const resultCategory = await Category.findAll({ where: { name } });

  if (resultCategory.length > 0) {
    return { message: 'This category has already been registered' };
  }

  const { dataValues } = await Category.create({ name });
  
  return dataValues;
};

module.exports = {
  createCategory,
};