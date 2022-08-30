const Joi = require('joi');

const joiName = Joi.string().required();

const validCategory = (req, res, next) => {
  const validCategoryName = joiName.validate(req.body.name);
  if (validCategoryName.error) {
    return res.status(400).json({
      message: '"name" is required' });
  }
  next();
};

module.exports = {
  validCategory,
};