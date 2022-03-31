const notFound = (req, res) => {
  res.status(404).send("this Route is not Found");
};

module.exports = notFound;
