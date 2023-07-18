const ResponseHelper = require('../resources/response')
const ReactionService = require('../services/ReactionService')
const jwt = require('jsonwebtoken')

class ReactionController {
  async createReaction(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await ReactionService.createReaction(req.body,userId)
      return ResponseHelper.success(data, 'like and dislike is created', res)
    } catch (error) {
      console.log("error===========>",error)
      return ResponseHelper.error(error,res)
    }
  }

  async getReaction(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await ReactionService.getReaction(req.body,userId)
      return ResponseHelper.success(data, 'user like and dislike video', res)
    } catch (error) {
      console.log("error===========>",error)
      return ResponseHelper.error(error,res)
    }
  }


}
module.exports = new ReactionController()