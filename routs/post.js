const express = require('express');
const router = express.Router();
const postcontroller =require('../controllers/post_controler');
router.get('./post' , postcontroller.post);
module.exports = router;
