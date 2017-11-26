'use strict';

const mongoose = require('mongoose');
const api = require('simple-men');
const UserScheme = api.schemes.User;

UserScheme.statics.login = user => {
  return api.models.User.findOne({
    email: user.email,
    password: user.password
  })
  .then(res => res)
  .catch(res => res);
};

UserScheme.statics.signIn = user => {
  const User = api.models.User;
  const nUser = new User(user);
  
  return nUser.save()
  .then(res => res)
  .catch(res => res);
};

mongoose.model('User', UserScheme);
