const Mongoose = require('mongoose');



const commentSchema = new Mongoose.Schema({
     comments : {
        type :String,
        required:true
     },
     user :{
      // type:mongoose.Schema.Types.ObjectId,
      type :Mongoose.Schema.Types.ObjectId,
      ref :'user'
  },
     post:{
       type:Mongoose.Schema.Types.ObjectId ,
       ref :'post'
     }
} , {timestamps :true
});

const Comment = Mongoose.model('comments' , commentSchema);
module.exports = Comment;