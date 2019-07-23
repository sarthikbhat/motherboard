//GLOBAL MODULES AND DECLARATIONS
const path = require('path');
const port = 5000;          
//CUSTOM MODULES
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const {Response} = require('./models/response');
const chalk = require('chalk');
const express = require('express');
const app = express();
var socket = require('socket.io');
require("./tools/responses");

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

var server = app.listen(port, err => {
  if (err) {
    console.log(chalk.red('Cannot run!'));
  } else {
    console.log(
      chalk.green.bold(
      `
      Yep this is working 🍺
      App listen on port: ${port} 🍕
      Env: Dev 🦄
      `,
      ),
    );
  }
});

//Socket Setup
var io = socket(server);
io.on('connection',function(socket){
  console.log(chalk.green.bold(`Socket Connected Successfuly!`,),);
  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });
})