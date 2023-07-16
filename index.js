const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const port = 4000;
const app = express();
const db = require('./config/mongoose');




app.use(expresslayouts);
app.use(express.static('./assets'));


//this is to extract diff css nd js file in layout 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//set our view engine
app.set('view engine' , 'ejs' );
app.set('views' , './views');


//use express route below 
app.use('/' , require('./routs/index.js'));


app.listen(port , function(err){
    if(err){
        console.log('error in connecting to data base');
        return;
    }
    console.log('server is open and running on port no :', port);
});