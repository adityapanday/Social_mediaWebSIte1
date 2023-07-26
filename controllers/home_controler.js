
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

// module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post
    //yahi use ho reahi hai on25 07 23
//     Post.find({}).populate('user').populate({
//         path: 'comments',
//         populate: {
//             path: 'user'
//         }
//     })
//     .exec(function(err, posts){
//         return res.render('home', {
//             title: "Codeial | Home",
//             posts:  posts
//         });
//     })

// }



// module.exports.create = async (req, res) => {
  
//     try {
//       const post = await Post.find({}).populate('user')
//         .populate({
//           path: 'comments',
//           populate: {
//             path: 'user',
//           }
//         });
//         // .exec();
//         // let users = await User.find({});
//      return res.render('home', {
//         title: 'Codeial | Home',
//         posts: post,
//         comments :Comment
//       });
//     } catch (err) {
//       console.log('Error in fetching posts:', err);
//      return;
//     }
//   };
  
  
  
  
  
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
        const posts = await Post.find().populate('user').populate('comments') // Use exec() without a callback
          
        return res.render('home', {
            title: 'Home',
            posts: posts, // Use the lowercase 'posts' variable here, which contains the fetched data
            comments :Comment
        });
        // return res.send("Working");
    } catch (err) {
        console.log('Error finding posts:', err);
        
    }
};

// module.exports.actionName = function(req, res){}

// module.exports.home = async (req, res) => {
//     try {
//         const posts = await Post.find({}).populate('user').exec(); // Use exec() without a callback

//         return res.render('home', {
//             title: 'Home',
//             posts: posts // Use the lowercase 'posts' variable here, which contains the fetched data
//         });
//     } catch (err) {
//         console.error('Error finding posts:', err);
//         return res.render('error', { error: 'Error fetching posts' });
//     }
// };