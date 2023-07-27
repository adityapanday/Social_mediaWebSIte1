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
// module.exports.create = async(req , res)=>{
//     try {
//         const posts = await Comment.create({
//             comments : req.body.comments,
//             user: req.user._id,
//             posts :req.body.post
            
//         });   

//         res.redirect('back');
//     } catch (err) {
//         console.log('Error in storing comment:', err);
//         return ;
//     }
// }






// module.exports.create = async (req, res) => {
//     try {
//       const post = await Post.findById(req.body.post).populate(post);
      
//       if (post) {
//         const comment = await Comment.create({
//           content: req.body.content,
//           post: req.body.post,
//           user: req.user._id,
//         });
  
//         post.comments.push(comment);
//         await post.save();
//         res.redirect("/");
//       } else {
//         console.log("Post not found");
       
//       }
//     } catch (err) {
//       console.log("Error in comment_controller:", err);
      
//     }
//   };