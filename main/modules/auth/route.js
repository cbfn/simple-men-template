'use strict';

const api = require('simple-men');

module.exports = () => {
  api.router
    .base("/auth")
    .post('/login', req => api.controllers.Auth.login(req.body))
    .post('/signin', req => api.controllers.Auth.signIn(req.body))
}