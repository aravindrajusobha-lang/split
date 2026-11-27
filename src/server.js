const http = require('http');
const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');
const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Placeholder for future socket handlers
io.on('connection', socket => {
  logger.info(`Socket connected: ${socket.id}`);
  // Authentication will be added in later phases
});

module.exports = { server, io };

if (require.main === module) {
  server.listen(config.port, () => {
    logger.info(`Server listening on port ${config.port}`);
  });
}

