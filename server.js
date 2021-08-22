// npm install epxress ejs body-parser web3 web3.js-browser socket.io mongoose jsonwebtoken bcryptjs axios nodemailer
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use("/scripts", express.static(__dirname +"/node_modules/web3.js-browser/build/"));

var fs = require("fs");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

io.on("connection", function(socket){
    console.log("New connection: " + socket.id);
});

// Mongoose  
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://blockchainshop:9qBZCCTZkNYK9ubW@cluster0.qah5q.mongodb.net/myBlockchainShop_01?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){ console.log("Mongo connected error! " + err) }else{
        console.log("Mongo connected done.");
    }
});

loadConfigFile("./config.json");

function loadConfigFile(file){
    fs.readFile(file, "utf8", function(err, data){
        if(err){ throw err };
        var obj = JSON.parse(data);
        require("./routes/user")(app, obj);
        console.log("Load routes done.");
    });
}


