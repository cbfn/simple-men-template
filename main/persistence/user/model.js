'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const jwt = require("jsonwebtoken");
const settings = require("config");

const UserScheme = require("./scheme")(mongoose);

UserScheme.statics.login = user => {
  const User = mongoose.model('User');

  return User.findOne({
    email: user.email,
    password: user.password
  })
  .then(res => res)
  .catch(res => res);
};

UserScheme.statics.signIn = user => {
  const User = mongoose.model('User');
  const nUser = new User(user);
  
  return nUser.save()
  .then(res => res)
  .catch(res => res);
};

mongoose.model('User', UserScheme);
