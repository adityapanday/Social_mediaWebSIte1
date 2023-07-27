const User = require('../models/user');

const passport = require('passport');


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}
// module.exports.create =

// to create an instance 
module.exports.create = async (req, res) => {
    if (req.body.password !== req.body.confirm_password) {
      return res.redirect('back');
    }
  
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        const newUser = await User.create(req.body);
        return res.redirect('/user/sign-in');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log('Error in finding/creating user:', err);
      return res.redirect('back');
    }
  };


// sign in and create a session for the user
module.exports.createSession = (req, res)=>{
    return res.redirect('/');
}

module.exports.destroySession = (req, res)=>{
    req.logOut((err)=>{
      if(err){
        console.log(`error aa gya yrr, ${err}`);
        return;
      }
    });

    return res.redirect('/');
}