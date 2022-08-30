const { Router } = require('express');
const userController = require('../controllers/userController');
const mdUser = require('../middlewares/mdUser');
const mdAuth = require('../middlewares/mdAuth');

const userRoute = Router();

userRoute.post('/', mdUser.validUser, userController.createUser);
userRoute.get('/', mdAuth.tokenValidation, userController.getAllUsers);
userRoute.get('/:id', mdAuth.tokenValidation, userController.getByIdUser);

module.exports = userRoute;