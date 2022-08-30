const joi = require('joi');

const displayName = joi.string().min(8).required();

const mdUser = (req, res, next) => {
  const userData = req.body;
  const { error } = displayName.validate(userData.displayName);
  if (error) {
 return res.status(400).json({
    message: '"displayName" length must be at least 8 characters long',
  }); 
}
  next();
};

module.exports = {
  mdUser,
};