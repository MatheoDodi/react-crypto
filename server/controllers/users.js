const User = require('../models/User');

exports.register = (req, res, next) => {
  console.log(req.body);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newUser
    .save()
    .then(user => res.status(201).json(user))
    .catch(console.log);
};
