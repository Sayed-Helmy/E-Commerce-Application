const validator = (ajvValidator) => {
  return (req, res, next) => {
    const valid = ajvValidator(req.body);
    if (!valid) {
      return res.status(400).json(ajvValidator.errors);
    }
    next();
  };
};

module.exports = validator;
