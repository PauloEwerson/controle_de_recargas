const { User } = require('../../database/models');
const tokenHelper = require('../../helpers/token');

const login = async (email, password) => {
  const resultUser = await User.findOne({ where: { email } });
  if (!resultUser || resultUser.password !== password) {
    return { message: 'Invalid fields' };
  }
  const token = tokenHelper.createToken({ email });
  return token;
};

module.exports = {
  login,
};