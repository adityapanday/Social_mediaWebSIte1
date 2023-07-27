
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
 
// module.exports.create = async (req, res) => {
//   try {
//     const posts = await Post.find({})
//       .populate('user')
//       .populate({
//         path: 'comments',
//         populate: {
//           path: 'user',
//         }
//       });

//     return res.render('home', {
//       title: 'Codeial | Home',
//       posts: posts,
//     });
//   } catch (err) {
//     console.log('Error in fetching posts:', err);
//     return res.status(500).send('An error occurred while fetching posts.');
//   }
// };
  



// const mongoose = require('mongoose');





module.exports.home = async (req, res) => {
    
    try {
        const posts = await Post.find().populate('user').populate('comments'); // Use exec() without a callback
        //   return res.send('user id' , Comment.user._id); 
        return res.render('home', {
            title: 'Home',
            posts: posts,  // Use the lowercase 'posts' variable here, which contains the fetched data
            comments :Comment
        });
       
    } catch (err) {
        console.log('Error finding posts:', err);
        
    }
};

