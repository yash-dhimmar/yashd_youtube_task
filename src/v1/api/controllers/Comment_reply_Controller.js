const ResponseHelper = require('../resources/response')
const CommentReplyService = require('../services/Comment_reply_Service')
const jwt = require('jsonwebtoken')
const Validator = require('../middleware/validation')
class CommentReplyController {
  async createComment(req, res) {
    try {
      await Validator.CreateCommentValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.createComment(req.body, userId)
      return ResponseHelper.success(data, 'comment ia created to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async updateComment(req, res) {
    try {
      await Validator.UpdateCommentValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.updateComment(req.body, userId)
      return ResponseHelper.success(data, 'comment ia updated to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async deleteComment(req, res) {
    try {
      await Validator.DeleteCommentValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.deleteComment(req.body, userId)
      return ResponseHelper.success(data, 'comment ia deleted to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async getComment(req, res) {
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.getComment(req.body, userId)
      return ResponseHelper.success(data, 'comment  video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async getCommentByVideoId(req, res) {
    try {
      await Validator.GetCommentByVideoIdValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.getCommentByVideoId(req.body, userId)
      return ResponseHelper.success(data, 'comment video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }


  async createReply(req, res) {
    try {
      await Validator.CreateReplyValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.createReply(req.body, userId)
      return ResponseHelper.success(data, 'comment reply is created to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async updateReply(req, res) {
    try {
      await Validator.UpdateReplyValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.updateReply(req.body, userId)
      return ResponseHelper.success(data, 'comment reply is updated to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async deleteReply(req, res) {
    try {
      await Validator.DeleteReplyValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id;
      let data = await CommentReplyService.deleteReply(req.body, userId)
      return ResponseHelper.success(data, 'comment reply is deleted to video', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }


}
module.exports = new CommentReplyController()