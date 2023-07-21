const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../middleware/auth');
const CommentReplyController = require('../controllers/Comment_reply_Controller')

//user create comment api
router.post('/create-comment',GlobalAuthClass.authenticate,CommentReplyController.createComment)
//user update comment api
router.post('/update-comment',GlobalAuthClass.authenticate,CommentReplyController.updateComment)
// user delete comment api
router.post('/delete-comment',GlobalAuthClass.authenticate,CommentReplyController.deleteComment)
//user get comment api
router.post('/get-comment',GlobalAuthClass.authenticate,CommentReplyController.getComment)
//user get cooment by video id
router.post('/get-commentby-videoId',GlobalAuthClass.authenticate,CommentReplyController.getCommentByVideoId)   

//user comment reply api
router.post('/create-reply',GlobalAuthClass.authenticate,CommentReplyController.createReply)
//user comment update reply api
router.post('/update-reply',GlobalAuthClass.authenticate,CommentReplyController.updateReply)
//user commemt delete reply api 
router.post('/delete-reply',GlobalAuthClass.authenticate,CommentReplyController.deleteReply)

module.exports = router;
