module.exports = {
  enviroment : "dev",  
  server:{
    host : "http://localhost",
    port : 3001
  },
  redis:{
    host : "cache",
    port : 6379
  },
  database : {
    uri: "mongodb://database/test",
    debug: false
  }
}
