const mdLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // não pode haver campos em branco
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  mdLogin,
};