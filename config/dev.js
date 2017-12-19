module.exports = {
  enviroment : "dev",  
  server:{
    host : "http://localhost",
    port : 3001
  },
  database : {
    type: "mongodb",
    uri: "mongodb://database/test",
    debug: false
  }
}