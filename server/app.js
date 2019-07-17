//GLOBAL MODULES AND DECLARATIONS
const path = require('path');
const port = 5000;          
//CUSTOM MODULES
const routes = require('./routes/routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

app.listen(port, () => console.log(`listening at ${port}`));