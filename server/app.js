//GLOBAL MODULES AND DECLARATIONS
const path = require('path');
const port = 5000;          
//CUSTOM MODULES
const routes = require('./routes/routes');
const express = require('express');
const bodyParser = require('body-parser');
require("./tools/responses");

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

app.listen(port, err => {
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