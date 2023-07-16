module.exports.profile = function(req , res){
    return res.render('user', {
        title:'profile'
     });
};


module.exports.signup = function(req, res){
    return res.render('user_sign_up' ,{
        title:'signup'
    });
}

module.exports.signin = function(req, res){
    return res.render('user_sign_in' ,{
        title:'signup'
    });
}

module.exports.create = function(req , res){
  //todo later
};

module.exports.createSession = function(req , res){
    //todo later
  };
  