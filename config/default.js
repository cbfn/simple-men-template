module.exports = {
  paths : {
    schemes : [`main/persistence/**/scheme.js`],
    models : [`main/persistence/**/model.js`],
    controllers : [`main/modules/**/controller.js`],
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
