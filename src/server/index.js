const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(cors());
server.use(middlewares);
server.use(router);

const routes = router.db.getState();
console.log('\n🚀 Available Routes:');
Object.keys(routes).forEach(route => {
  console.log(`   /${route}: ${routes[route].length} items`);
});

server.listen(port, () => {
  console.log('\n⭐️ JSON Server is running!');
  console.log(`
   Local:            http://localhost:${port}
   Available Routes: http://localhost:${port}/movies
                    http://localhost:${port}/db
                    
   Health:           ✅ Server is healthy
   Time:            ${new Date().toLocaleString()}
   
   🔥 Happy coding!
  `);
});

// Error handling
server.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({ error: 'Something went wrong!' });
});