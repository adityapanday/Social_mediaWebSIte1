const express = require('express');
const router = express.Router();
const homecontroller= require('../controllers/home_controler.js');


console.log('router is connect to server succesfully to srever');


router.get('/' , homecontroller.home);

module.exports = router;