const tokenHelper = require('../helpers/token');

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;
    try {
      if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
      }
      
      const dataToken = tokenHelper.verifyToken(authorization);
      if (dataToken.email !== req.email) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
        next();
    } catch (error) {
        res.status(401).json({ message: 'Você não deveria estar aqui' });
    }
};

module.exports = tokenValidation;