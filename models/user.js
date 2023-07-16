const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true ,
        uniqure : true
    },
    pasward:{
        type : String,
        required : true,

    },
    name:{
        type : String,
        required :true
    }

},{
    //was createdd to keep track of updates and created date 
    timestamps:true
});

const User= mongoose.model('User ' , userSchema);
module.exports = User;