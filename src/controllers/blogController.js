const jwt = require('jsonwebtoken');
const blogService = require('../services/blogService');

const { JWT_SECRET } = process.env;

const ERROR_MESSAGE = 'Server error';

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const resultLogin = await blogService.login(email, password);
    if (resultLogin.message) {
      return res.status(400).json(resultLogin);
    }

    const token = jwt.sign({ email }, JWT_SECRET);

    return res.status(200).json({ token });
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  login,
};