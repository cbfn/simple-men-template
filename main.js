const config = require('config');
const api = require('simple-men');

api.run(config)
.then(res => console.log(`HTTP server-${res.enviroment} rodando em ${res.host} na porta ${res.port}.`))
.catch(err => {
    throw new Error(err);
})