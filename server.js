const jsonServer = require('json-server');
const db = require('./src/db');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const ABILITIES = require('./src/abilities');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(
  jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/auth/local/callback': '/Users/login',
  }),
);

server.post('/Users/login', (req, res) => {
  res.json({
    id: 'faketoken',
    ttl: 4164313158,
    userId: 'admin',
  });
});

server.post('/Users/logout', (req, res) => {
  res.status(200).end();
});

server.get('/Users/:id/info', (req, res) => {
  res.json({
    user: {
      username: 'Colmena Admin',
      id: 'admin',
    },
    roles: {
      assigned: ['system-admin', 'system-upload'],
      unassigned: [],
    },
    abilities: ABILITIES,
  });
});
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is listening at 3001...');
});
