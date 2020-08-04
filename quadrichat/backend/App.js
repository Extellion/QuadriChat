const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io");

const port = 3001;

const socket = io(http);
//create an event listener

//To listen to messages
socket.on("connection", (socket) => {
  console.log("user connected");
});

//wire up the server to listen to our port 500
http.listen(port, () => {
  console.log("connected to port: " + port);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
