const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const { exec } = require("child_process");
const { error } = require('console');
const { stdout, stderr } = require('process');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

// Wenn ein Client sich verbindet
io.on('connection', (socket) => {
  console.log('Ein Benutzer hat sich verbunden');

  socket.on('runFile', (path) => {
        const filePath = path

        exec(filePath, (error, stdout, stderr) => {
            
        })
  });

  // Wenn ein Benutzer die Verbindung trennt
  socket.on('disconnect', () => {
    console.log('Ein Benutzer hat die Verbindung getrennt');
  });
});

server.listen(PORT, () => {
  console.log(`Server gestartet auf http://localhost:${PORT}`);
});
