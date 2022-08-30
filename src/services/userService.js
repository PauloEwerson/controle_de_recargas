const { User } = require('../database/models');
const tokenHelper = require('../helpers/token');

const createUser = async (userData) => {
  const resultUser = await User.findAll({ where: { email: userData.email } });

  if (resultUser.length > 0) {
    return { message: 'User already registered' };
  }

  await User.create(userData);

  const token = tokenHelper.createToken({ email: userData.email });
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  createUser,
  getAllUsers,
};