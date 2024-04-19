const jsonServer = require('json-server');
const auth = require('json-server-auth');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.use(auth);

// 跨域請求
module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

app.use(router);
app.listen(3000, () => {
  console.log('JSON Server is running');
});
