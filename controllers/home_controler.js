
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
  
module.exports.home = async function(req, res){

    try{
         // populate the user of each post
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
    
        let users = await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts:  posts,
            all_users: users
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}




