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

const getAllUsers = async (req, res) => {
  try {
    const resultAllUsers = await userService.getAllUsers();
    
    if (resultAllUsers.message) {
      return res.status(409).json(resultAllUsers);
    }

    return res.status(200).json(resultAllUsers);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

const getByIdUser = async (req, res) => {
  try {
    const { id } = req.params;

    const resultUserById = await userService.getByIdUser(id);
    
    if (resultUserById.message) {
      return res.status(404).json(resultUserById);
    }

    return res.status(200).json(resultUserById);
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getByIdUser,
};