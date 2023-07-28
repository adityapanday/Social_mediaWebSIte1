const express = require('express');
const passport = require('passport');
const router = express.Router();

const commentController = require('../controllers/comment_controler');

router.get('/destroy/:id' ,passport.checkAuthentication,commentController.destroy);
//for post
router.post('/create' ,passport.checkAuthentication,commentController.create);
module.exports = router;