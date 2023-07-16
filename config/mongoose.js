const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/codial_development");

const db = mongoose.connection;

db.on('error' , console.error.bind(console  , 'tere is a error in connecting to data base0'));

db.once('open' , ()=>{
    console.log('connnected to data base');
   });
   
module.exports = db ;