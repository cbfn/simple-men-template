const config = require('config');
const server = require('simple-men');

server.start(config)
.then(res => console.log(`HTTP server-${res.enviroment} rodando em ${res.host} na porta ${res.port}.`))
.catch(err => {
    throw new Error(err);
})