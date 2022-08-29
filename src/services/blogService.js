const { User } = require('../database/models');

const login = async (email, password) => {
  const resultUser = await User.findOne({ where: { email } });
  if (!resultUser || resultUser.password !== password) {
    return { message: 'Invalid fields' };
  }
  return resultUser;
};

module.exports = {
  login,
};