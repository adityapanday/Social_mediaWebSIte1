const mongoose = require('mongoose');
// const User = require('./user');

const postSchema = new mongoose.Schema({
        Content:{
            type:String,
            required:true
        },
        user :{
            // type:mongoose.Schema.Types.ObjectId,
            type :mongoose.Schema.Types.ObjectId,
            ref :'user'
        },
        // not vert importent step this is just added to make our it fast ki kon sa commernt kisne kara hai 
        // isi  lia yaha comment ki id la lia hai  &&&& ya array h comments ka  
        comments: [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "comments" 
          
        }
            
        ]
    },{timestamps :true
});
const Post = mongoose.model('Post' ,postSchema);

module.exports = Post;