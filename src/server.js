const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');
const init = async()=>{
  const server = Hapi.server({
    port: process.env.NODE_ENV !== 'production'? 'localhost': '0.0.0.0',
    host: 'localhost',
    routes:{
      cors:{
        origin:['*'],
      },
    },
  });
  server.route(routes)
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
