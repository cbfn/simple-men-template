import { route, controllers } from 'appt';

route("/auth")
  .get('/login/:user', req => controllers.auth.login(req.body))
  .post('/signin', req => controllers.auth.signIn(req.body));
