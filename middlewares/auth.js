const expressJWT = require("express-jwt");
require("dotenv").config();

exports.requireSignIn = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && (req.profile._id == req.auth._id);

  if (!user) {
    return res.status(403).json({
      error: "Access denied",
    });
  }

  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.auth.role == 0) {
    return res.status(403).json({
      error: "Admin ressource access denied !",
    });
  }

  next();
};
