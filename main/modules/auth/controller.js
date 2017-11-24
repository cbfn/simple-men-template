'use strict';

let config = require('config');
let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports.signIn = user => {
  return User.signIn(user)
    .then(res => {

      return {
        statusCode: 200,
        data: res 
      }
      
    })    
    .catch(err => err);
};

module.exports.login = user => {
  return User.login(user)
    .then(res => {

      if(!res) throw 'Usuário ou senha errados.';

      const jwt = require("jsonwebtoken");

      var token = jwt.sign({
        nome: res.name
      }, config.access.admin.secret, {
        expiresIn: "5 days"
      });
      
      return {
        statusCode: 200,
        data: token
      };
      
    })
    .catch(err => {
      return {
        statusCode: 401,
        data: err 
      }  
    });
};