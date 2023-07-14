const express = require('express');
const port = 4000;



const app= express();
//use express route below 
app.use('/' , require('./routs/index.js'));


app.get('/', function(req, res) {
    res.send('Hello, world!');
  }); 


  
app.listen(port , function(err){
    if(err){
        console.log('error in connecting to data base');
        return;
    }
    console.log('server is open and running on port no :', port);
});