const ResponseHelper = require('../resources/response')
const ReactionService = require('../services/ReactionService')
const jwt = require('jsonwebtoken')
const Validator = require("../middleware/validation")

class ReactionController {
  async createReaction(req, res) {
    try {
      await Validator.CreateReactionValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData._id
      let data = await ReactionService.createReaction(req.body,userId)
      return ResponseHelper.success(data, 'like and dislike is created', res)
    } catch (error) {
      console.log("error===========>",error)
      return ResponseHelper.error(error,res)
    }
  }

  async getReaction(req, res) {
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData._id
      let data = await ReactionService.getReaction(req.body,userId)
      return ResponseHelper.success(data, 'user like and dislike video', res)
    } catch (error) {
      console.log("error===========>",error)
      return ResponseHelper.error(error,res)
    }
  }


}
module.exports = new ReactionController()