const express = require('express');
const app = express();
const port = 4000;

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