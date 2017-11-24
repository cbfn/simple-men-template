module.exports = {
  bodyParser: {
    json: {
      limit: '50mb', 
      type: 'application/json'
    }, 
    urlencoded: {
      limit: '50mb', 
      extended: true
    }
  },
  cors: [{
    route: "/*",
    header: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type, Origin, Accept, X-Requested-With, Origin, Cache-Control, X-File-Name",
      "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS, DELETE"
    }
  }],
  paths : {
    models : [`main/persistence/**/model.js`],
    routes : [`main/modules/**/route.js`]
  },
  statics : [{
  	route : '/',
  	path : `/docs`
  }],
  access: {
    admin: {
      path: "/admin/", 
      ignore: ['/favicon.ico'], 
      secret: "ien6apg1x3"
    }
  }
}
