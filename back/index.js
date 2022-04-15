const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const io = new Server(server, {
  cors: {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ message, currentUser, userId, socketId }) => {
    io.emit("message", { message, currentUser, userId, socketId });
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
