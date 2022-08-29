const { Router } = require('express');
const blogController = require('../controllers/blogController');
const middlewar = require('../middlewares/mdLogin');

const blogRoute = Router();

blogRoute.post('/', middlewar.mdLogin, blogController.login);

module.exports = blogRoute;