const mongoose = require('mongoose');
const User = require('../models/user')
const Post = require('../models/post');
const comment = require('../models/comment');


module.exports.create = async (req, res) => {
    
    try {
        const posts = await Post.create({
            Content : req.body.content, 
            user: req.user._id
            
        });

        res.redirect('back');
    } catch (err) {
        console.log('Error in storing post:', err);
        return ;
    }
};
module.exports.destroy = async(req , res)=>{
try{
    let post = await Post.findById(req.params._id);
    //we have used .id bcoz it return string which is compareable
    //agar ._id user karte to vo string nahi hota or hmm use b nahi kar 
    //pate
    if(post.user == req.user.id){
        post.remove();
        Comment.deleteMany({post:req.param.id} , (err)=>{
            return res.redirect('back');
        });
    }
}catch{
    console.log(`err in getting post`);
    return res.redirect('back');
}
   
        
};











