const express = require('express');
const app = express();
const socketIo = require('socket.io');
const http = require('http');
const {Chess} = require('chess.js');
const path = require('path');


const server = http.createServer(app);

const io = socketIo(server);
const chess = new Chess();
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("index",{title: "CheEsGaMe"});
});

io.on("connection", (socket)=>{
    console.log("connected");

    socket.on("data",(data)=>{
        console.log(data)
        socket.broadcast.emit("data", data);
        // io.emit("id",socket.id);
    })
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});