
const Comment = require('../models/comment');
const Post = require('../models/post');
const  User  = require('../models/user');


module.exports.create = async(req , res)=>{
    try {
        const posts = await Comment.create({
            comments : req.body.comments,
            user: req.user._id
            
        });

        res.redirect('back');
    } catch (err) {
        console.log('Error in storing comment:', err);
        return ;
    }
}