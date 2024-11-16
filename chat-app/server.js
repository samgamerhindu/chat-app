const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

// Store users with their socket IDs
const users = {};

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/public/chat.html");
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Handle login and assign user nam
