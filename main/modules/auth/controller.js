'use strict';

const api = require('simple-men');
const jwt = require("jsonwebtoken");

module.exports = class Auth {  
  static signIn(user){
    return api.models.User.signIn(user)
      .then(res => api.respond(200).send(res))
      .catch(err => err);
  }

  static login(user){
    return api.models.User.login(user)
      .then(res => {
  
        if(!res) throw 'Usuário ou senha errados.';        
  
        var token = jwt.sign({
          nome: res.name
        }, api.config.access.admin.secret, {
          expiresIn: "5 days"
        });
        
        return api.respond(200).send(token)       
      })
      .catch(err => api.respond(401).send(err));
  };
}