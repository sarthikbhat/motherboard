//GLOBAL MODULES AND DECLARATIONS
const path = require('path');
const port = 5000;          
//CUSTOM MODULES
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Server Works")
});

app.listen(port, () => console.log(`listening at ${port}`));