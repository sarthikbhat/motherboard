const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const Routes = require('./routes/routes')
const db = require('./util/database');


const app = express();
const fileStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null,'images');
    },
    filename: (req,file,cb)=>{
      cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});
  
const Filefilter = (req,file,cb)=>{
    if (file.mimetype === "image/png" ||file.mimetype === "image/jpg" ||file.mimetype === "image/jpeg"  )
    {
        cb(null,true);
    }
    else{
        cb(null,false);
    }
};

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.json());
app.use(multer({storage:fileStorage,fileFilter: Filefilter}).single('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(Routes);
app.listen(3000);