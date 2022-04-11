const { Unauthenticated } = require("../errors");

const rolesChecker = (allowedRoles) => {
  return async (req, res, next) => {
    if (!req?.roles) return res.status(401).json({ msg: "Not Authorized!" });
    const rollesAllowed = [...allowedRoles];
    const userRoles = req.roles;
    console.log(userRoles);
    const check = rollesAllowed.every((role) => userRoles.includes(role));
    console.log(rollesAllowed);
    if (!check) return res.status(401).json({ msg: "Not Authorized!" });
    next();
  };
};

module.exports = rolesChecker;
