const http = require('http');
const app = require('./app.js');
const PORT = process.env.PORT || 8080;
const Game = require('./src/models/game.js');

const server = http.createServer(app);
server.listen(PORT);
console.log(`Listening on PORT ${PORT}`);
