const ResponseHelper = require('../resources/response')
const FeelingService = require('../services/FeelingService')
const jwt = require('jsonwebtoken')

class FeelingController {
  async create(req, res) {
    try {
      var token = req.headers.authorization;
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await FeelingService.create(req.body,userId)
      return ResponseHelper.success(data, 'like and dislike is created', res)
    } catch (error) {
      return ResponseHelper.error(error,res)
    }
  }

}
module.exports = new FeelingController()