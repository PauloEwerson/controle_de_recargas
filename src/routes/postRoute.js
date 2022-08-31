const { Router } = require('express');
const mdAuth = require('../middlewares/mdAuth');
const mdPost = require('../middlewares/mdPost');
const postController = require('../controllers/postController');

const postRoute = Router();

postRoute.post('/',
mdAuth.tokenValidation,
mdPost.validPost,
postController.createPost);

module.exports = postRoute;