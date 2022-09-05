const { Router } = require('express');
const uploadController = require('../controllers/getData');
// const middlewar = require('../middlewares/mdLogin');

const dataRoute = Router();

// loginRoute.post('/', middlewar.mdLogin, loginController.login);
dataRoute.get('/', uploadController.getData);

module.exports = dataRoute;