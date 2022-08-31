const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).required(),
});

const validPost = (req, res, next) => {
  console.log('req.body', req.body);
  const { error } = postSchema.validate(req.body);
  console.log('ERRORRR', error);
  if (error) {
    return res.status(400).json({
      message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validPost,
};