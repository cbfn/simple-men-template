module.exports = {
  enviroment : "dev",
  redis: {
    port: 6379,
    host: 'cache'
  },
  database : {
    uri: "mongodb://database/boilerplate",
    debug: false
  },
  server:{
    host : "http://localhost",
    port : 3001
  }
}
