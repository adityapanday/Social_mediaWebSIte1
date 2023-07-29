const Post = require('../models/post');
const Comment = require('../models/comment');
const  User  = require('../models/user');



module.exports.create = async(req, res) => {
   try{
    let post = await Post.findById(req.body.post);
    if (post) {
      let comment = await Comment.create({
        comments: req.body.comments,
        user: req.user._id,
        post: req.body.post
      });
      post.comments.push(comment);
       post.save();
      res.redirect('/');
    } 
} catch (err) {
      res.send('Post not found');
      console.log("error" , err);
      return ;
    }
  };

  module.exports.destroy = async(req , res )=>{
    try {

    
    const comment = Comment.findById(req.param.id).exec();

    if(!comment){
      console.log('post not found');
      return res.redirect('back');
    }
    if(comment.user == req.user.id){
      await comment.deleteOne().exec();
      // Post.findByIdAndUpdate(postId , {come})
      return res.redirect('back');
    }else{
      return res.redirect('back');
    }
  }catch{
    console.error('Error in getting post:', err);
    return res.redirect('back');
  }
};