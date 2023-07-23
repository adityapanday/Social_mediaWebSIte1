const Post = require('../models/post');
const  User  = require('../models/user');

// const mongoose = require('mongoose');




// module.exports.home = async (req, res) => {
//     // console.log(req.cookies);
//     // res.cookie('user_id', 25);

    
//         const posts = await Post.find({}).populate('user').exec(async(err ,post)=>{
//             try{
                    
//              return res.render('home', {
//             title: 'Home',
//             posts: posts // Use the lowercase 'posts' variable here, which contains the fetched data
//                });
//             }
//         catch (err) {
//             console.error('Error finding posts:', err);
//             return res.render('error', { error: 'Error fetching posts' });
//         }
//     });
  
// };
module.exports.home = async (req, res) => {
    
    try {
        const posts = await Post.find().populate('user') // Use exec() without a callback
          
        return res.render('home', {
            title: 'Home',
            posts: posts // Use the lowercase 'posts' variable here, which contains the fetched data
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