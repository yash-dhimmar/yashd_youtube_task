const ResponseHelper = require('../resources/response')
const CommentReplyService = require('../services/Comment_reply_Service')
const jwt = require('jsonwebtoken')


class CommentReplyController {
  async createComment(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.createComment(req.body, userId)
      return ResponseHelper.success(data, 'comment ia created to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async updateComment(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.updateComment(req.body, userId)
      return ResponseHelper.success(data, 'comment ia updated to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async deleteComment(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.deleteComment(req.body, userId)
      return ResponseHelper.success(data, 'comment ia deleted to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async getComment(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.getComment(req.body, userId)
      return ResponseHelper.success(data, 'comment  video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async getCommentByVideoId(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.getCommentByVideoId(req.body, userId)
      return ResponseHelper.success(data, 'comment video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }


  async createReply(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.createReply(req.body, userId)
      return ResponseHelper.success(data, 'comment reply is created to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async updateReply(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.updateReply(req.body, userId)
      return ResponseHelper.success(data, 'comment reply is updated to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async deleteReply(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id;
      var data = await CommentReplyService.deleteReply(req.body, userId)
      return ResponseHelper.success(data, 'comment reply is deleted to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }
  

}
module.exports = new CommentReplyController()