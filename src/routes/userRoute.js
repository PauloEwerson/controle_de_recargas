const { Router } = require('express');
const userController = require('../controllers/userController');
const middlewar = require('../middlewares/mdUser');

const userRoute = Router();

userRoute.post('/', middlewar.mdUser, userController.createUser);

module.exports = userRoute;