const { User } = require('../database/models');

const createUser = async (userData) => {
  const resultUser = await User.findAll({ where: { email: userData.email } });

  if (resultUser.length > 0) {
    return { message: 'User already registered' };
  }

  await User.create(userData);

  return resultUser;
};

module.exports = {
  createUser,
};