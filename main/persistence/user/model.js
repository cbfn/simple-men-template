import { schemes, models, register } from 'appt'

const UserScheme = schemes.User;

UserScheme.statics.login = user => {
  return models.User.findOne({
    email: user.email,
    password: user.password
  })
  .then(res => res)
  .catch(res => res);
};

UserScheme.statics.signIn = user => {
  const newUser = new models.User(user);
  
  return newUser.save()
  .then(res => res)
  .catch(res => res);
};

register.model('User', UserScheme);
