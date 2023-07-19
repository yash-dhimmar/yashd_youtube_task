const ResponseHelper = require('../resources/response')
const HistoryService = require('../services/HistoryService')
const jwt = require('jsonwebtoken')

class HistoryController {
  async createHistory(req, res) {
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await HistoryService.createHistory(req.body, userId)
      return ResponseHelper.success(data, 'history saved', res)
    } catch (error) {
      console.log("error==========>",error)
      return ResponseHelper.error(error, res)
    }
  }

}
module.exports = new HistoryController()
