'use strict';

const user = require('./controller'),
      express = require('express'),
      router = express.Router();

module.exports = app => {

  app.use("/auth", router);

  router.post('/login', (req, res) => {    
    user.login(req.body)
    .then(result => res.status(result.statusCode).send(result.data))
    .catch(err => err);
  });

  router.post('/signin', (req, res) => {
    user.signIn(req.body)
    .then(result => res.status(result.statusCode).send(result.data))
    .catch(err => err);
  });
};
