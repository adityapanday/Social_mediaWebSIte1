const express = require('express');
const router = express.Router();
const homecontroller= require('../controllers/home_controler.js');
// const usercollector = require('../controllers/user_controller.js');

console.log('router is connect to server succesfully to srever');


router.get('/' , homecontroller.home);
router.use('/user' , require('./user.js') );



module.exports = router;