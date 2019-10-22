const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Routes = require('./routes/routes')
const db = require('./util/database');


const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(Routes);
app.listen(3000);