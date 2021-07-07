const User = require("../models/user");

exports.firstController = (req, res) =>
  res.send({
    message: "Hello dear user",
  });

exports.signup = (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.status(400).send(err);
    res.send(user);
  });
};
