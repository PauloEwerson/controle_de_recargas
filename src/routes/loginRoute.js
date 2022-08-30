const { Router } = require('express');
const loginController = require('../controllers/loginController');
const middlewar = require('../middlewares/mdLogin');

const loginRoute = Router();

loginRoute.post('/', middlewar.mdLogin, loginController.login);

module.exports = loginRoute;