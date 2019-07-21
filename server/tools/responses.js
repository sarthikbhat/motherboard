const {Response} = require('../models/response');
const chalk = require('chalk');
const express = require('express');
const app = express();

app.response.success = function(message, data, displayMessage, code){
    console.log(chalk.green(message));
    this
      .status(200)
      .send(Response('success', message, data, displayMessage,code));
}
  
app.response.error = function(message, data, displayMessage, code){
    console.log(chalk.red(message));
    if(data) {
      console.log(chalk.red(data));
    }
    message = typeof message != 'string' ? 'Something went wrong' : message;
    this
      .status(200)
      .send(Response('error', message, data, displayMessage,code));
}
  
app.response.unauthorizedUser = function(){
    console.log(chalk.yellow('Unauthorized User'));
    this
      .status(200)
      .send(Response('error', 'Unauthorized User', null, null, 403));
}
  
app.response.accessDenied = function(){
    console.log(chalk.cyan('Access Denied. Check role of User and RBAC list'));
    this
      .status(200)
      .send(Response('error', 'Access Denied', null, null, 500));
}
  
app.response.mime = function(readstream){
    readstream.pipe(this);
};