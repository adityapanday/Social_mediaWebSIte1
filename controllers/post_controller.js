const mongoose = require('mongoose');
// const User = require('../models/user')
const Post = require('../models/post');


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

