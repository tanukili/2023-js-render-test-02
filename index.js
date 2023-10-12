const jsonServer = require('json-server');
const auth = require('json-server-auth');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
