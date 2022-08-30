const { Router } = require('express');
const mdAuth = require('../middlewares/mdAuth');
const postController = require('../controllers/postController');

const postRoute = Router();

postRoute.post('/',
mdAuth.tokenValidation,
postController.createPost);

module.exports = postRoute;