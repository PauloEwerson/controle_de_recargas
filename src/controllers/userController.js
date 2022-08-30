// const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const ERROR_MESSAGE = 'Server error';

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const resultUser = await userService.createUser(userData);

    if (resultUser.message) {
      return res.status(409).json(resultUser);
    }

    return res.status(201).json({ token: resultUser });
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createUser,
};