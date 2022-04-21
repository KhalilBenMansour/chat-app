require("dotenv").config();
const express = require("express");
const app = express();
// socket
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const users = require("./routes/user");
const message = require("./routes/message");

const mongoose = require("mongoose");
const connectDb = require("./config/connectDb");

// config
app.use(express.json());
app.use(cors());

// database mongoose
connectDb();

// socket.io config
const io = new Server(server, {
  cors: {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  },
});

// socket.io connection
io.on("connection", (socket) => {
  socket.on("message", ({ message, currentUser, userId, socketId }) => {
    io.emit("message", { message, currentUser, userId, socketId });
  });
});

/**********End points*************/
app.use("/api/users", users);
app.use("/api/message", message);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
