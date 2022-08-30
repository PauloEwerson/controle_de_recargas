const mdUser = (req, res, next) => {
  const userData = req.body;

  if (userData.displayName.length < 8) {
    // displayName devidamente preenchido com 8 caracteres ou mais
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

module.exports = {
  mdUser,
};