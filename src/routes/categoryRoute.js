const { Router } = require('express');
const mdAuth = require('../middlewares/mdAuth');
const mdCategory = require('../middlewares/mdCategory');
const categoryController = require('../controllers/categoryController');

const categoryRoute = Router();

categoryRoute.post('/',
mdAuth.tokenValidation,
mdCategory.validCategory,
categoryController.createCategory);

module.exports = categoryRoute;