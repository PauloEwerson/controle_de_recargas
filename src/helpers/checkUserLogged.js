const tokenHelper = require('./token');
const { User } = require('../database/models');

const checkUserLogged = async (authorization) => {
  const { email } = tokenHelper.verifyToken(authorization);
  const { dataValues } = await User.findOne({
    where: { email }, 
    attributes: { exclude: ['password'] }, 
  });
 // removerSenha
  return dataValues;
};

module.exports = checkUserLogged;