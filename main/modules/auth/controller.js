import { models, respond, config, register } from 'appt';
import jwt from 'jsonwebtoken';

const signIn = (user) => {
  return models.User.signIn(user)
    .then(res => respond(200).send(res))
    .catch(err => err);
}

const login = (user) => {
  return models.User.login(user)
    .then(res => {

      if(!res) throw 'Usuário ou senha errados.';        

      const token = jwt.sign({
        nome: res.name
      }, config.access.admin.secret, {
        expiresIn: "5 days"
      });
      
      return respond(200).send(token)       
    })
    .catch(err => respond(401).send(err));
};

register.controller('auth', {
  signIn,
  login
})