const Joi = require('joi');

const joiDisplayName = Joi.string().min(8).required();
const joiEmail = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });

const mdUser = (req, res, next) => {
  const userData = req.body;
  const validDisplayName = joiDisplayName.validate(userData.displayName);
  if (validDisplayName.error) {
 return res.status(400).json({
    message: '"displayName" length must be at least 8 characters long',
  }); 
}
  const validEmail = joiEmail.validate(userData.email);
  if (validEmail.error) {
 return res.status(400).json({
    message: '"email" must be a valid email',
  }); 
}
  next();
};

module.exports = {
  mdUser,
};