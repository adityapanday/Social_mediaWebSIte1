const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');




passport.use(new LocalStrategy({ usernameField: 'email' },
    async function(email, password, done) {
        try {
            var user = await User.findOne({ email: email });

            
            if (!user || user.password !== password) {
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        } catch (err) {
            
            console.log('Error in finding user --> Passport');
            
            
            return done(err);
        }
    }
));









// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    if (!user) {
      console.log('User not found --> Passport');
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    console.log('Error in finding user --> Passport', err);
    return done(err);
  }
});


passport.checkAuthentication = async (req, res, next) => {
    if (req.isAuthenticated()) {
      // If the user is authenticated (logged in), continue to the next middleware/route handler
      next();
    } else {
      // If the user is not authenticated, redirect them to the sign-in page
      return res.redirect('/user/sign-in');
    }
  };
  


passport.setAuthenticatedUser= async (req , res , next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    } 
    next();
}


module.exports = passport;