const blogService = require('../services/blogService');

const ERROR_MESSAGE = 'Server error';

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const resultLogin = await blogService.login(email, password);
    if (resultLogin.message) {
      return res.status(400).json(resultLogin);
    }

    return res.status(200).json(resultLogin);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  login,
};