const server = require('./api/server')

const PORT = process.env.PORT || 5100;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});


