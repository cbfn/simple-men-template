module.exports = {
  paths : {
    models : [`main/persistence/**/model.js`],
    routes : [`main/modules/**/route.js`]
  },
  access: {
    admin: {
      path: "/admin/", 
      ignore: ['/favicon.ico'], 
      secret: "ien6apg1x3"
    }
  }
}
