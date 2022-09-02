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
  const resultAllUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  if (resultAllUsers.length === 0) {
    return { message: 'There are no registered users' };
  }

  return resultAllUsers;
};

const getByIdUser = async (id) => {
  const resultUser = await User.findOne({ where: { id },
    attributes: { exclude: ['password'] } });

  if (!resultUser) {
    return { message: 'User does not exist' };
  }

  return resultUser;
};

const checkUserExists = async (id) => {
  const resultUser = await User.findAll({ where: { id } });
  if (resultUser.length === 0) {
    return { message: 'User does not exist' };
  }
  return resultUser;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return { message: 'User deleted successfully' };
};

module.exports = {
  createUser,
  getAllUsers,
  getByIdUser,
  checkUserExists,
  deleteUser,
};