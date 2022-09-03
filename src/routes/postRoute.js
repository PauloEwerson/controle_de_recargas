const { Router } = require('express');
const mdAuth = require('../middlewares/mdAuth');
const mdPost = require('../middlewares/mdPost');
const postController = require('../controllers/postController');

const postRoute = Router();

postRoute.post('/',
mdAuth.tokenValidation,
mdPost.validPost,
postController.createPost);

postRoute.get('/',
mdAuth.tokenValidation,
postController.getAllBlogPosts);

postRoute.get('/search',
mdAuth.tokenValidation,
postController.searchPost);

postRoute.get('/:id',
mdAuth.tokenValidation,
postController.getByIdBlogPost);

postRoute.put('/:id',
mdAuth.tokenValidation,
mdPost.validUpdate,
postController.updatePost);

postRoute.delete('/:id',
mdAuth.tokenValidation,
postController.deletePost);

module.exports = postRoute;