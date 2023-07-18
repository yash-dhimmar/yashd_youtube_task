const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../middleware/auth');
const CommentReplyController = require('../controllers/Comment_reply_Controller')

//COMMENT API
router.post('/create-comment',GlobalAuthClass.authenticate,CommentReplyController.createComment)
router.post('/update-comment',GlobalAuthClass.authenticate,CommentReplyController.updateComment)
router.post('/delete-comment',GlobalAuthClass.authenticate,CommentReplyController.deleteComment)
router.post('/get-comment',GlobalAuthClass.authenticate,CommentReplyController.getComment)
router.post('/get-commentby-videoId',GlobalAuthClass.authenticate,CommentReplyController.getCommentByVideoId)

//REPLY API
router.post('/create-reply',GlobalAuthClass.authenticate,CommentReplyController.createReply)
router.post('/update-reply',GlobalAuthClass.authenticate,CommentReplyController.updateReply)
router.post('/delete-reply',GlobalAuthClass.authenticate,CommentReplyController.deleteReply)






module.exports = router;
