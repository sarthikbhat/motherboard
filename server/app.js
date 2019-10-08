const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./routes/routes')
const db = require('./util/database');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/teacher',(req,res)=>{
    res.render('teacher');
});
app.get('/student',(req,res)=>{
    res.render('student');
});
app.get('/take-attendance',(req,res)=>{
    res.render('take-attendance',{
        students:[]
    })
});
app.get('/attendance-report',(req,res)=>{
    res.render('attendance-report',{
        students:[]
    })
});
app.post('/add-teacher',Routes);
app.post('/delete-teacher',Routes);
app.post('/fetch-all-teacher',Routes);
app.post('/find-teacher',Routes);
app.post('/add-student',Routes);
app.post('/delete-student',Routes);
app.post('/fetch-all-student',Routes);
app.post('/find-student',Routes);
app.post('/generate-list',Routes);

app.post('/att-report',Routes);


app.listen(3000);