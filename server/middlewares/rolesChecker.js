const { Unauthenticated } = require("../errors");

const rolesChecker = (allowedRoles) => {
  return async (req, res, next) => {
    if (!req?.roles)
      return res.status(401).json({ message: "Not Authorized!" });
    const rollesAllowed = [...allowedRoles];
    const userRoles = req.roles;
    const check = rollesAllowed.every((role) => userRoles.includes(role));
    if (!check)
      return res
        .status(401)
        .json({ message: "You R not Authorized To Do this action!" });
    next();
  };
};

module.exports = rolesChecker;
