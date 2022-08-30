const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const { JWT_SECRET } = process.env;
const ERROR_MESSAGE = 'Server error';

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const resultUser = await userService.createUser(userData);

    if (resultUser.message) {
      return res.status(409).json(resultUser);
    }

    const token = jwt.sign(userData.email, JWT_SECRET);

    return res.status(201).json({ token });
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createUser,
};