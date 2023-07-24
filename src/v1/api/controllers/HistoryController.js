const ResponseHelper = require('../resources/response')
const HistoryService = require('../services/HistoryService')
const jwt = require('jsonwebtoken')
const Validator = require('../middleware/validation')

class HistoryController {
  async createHistory(req, res) {
    try {
      await Validator.CreateHistoryValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await HistoryService.createHistory(req.body, userId)
      return ResponseHelper.success(data, 'history saved', res)
    } catch (error) {
      console.log("error==========>", error)
      return ResponseHelper.error(error, res)
    }
  }
  
  async deleteHistory(req, res) {
    try {
      await Validator.DeleteHistoryValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await HistoryService.deleteHistory(req.body, userId)
      return ResponseHelper.success(data, 'history deleted', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async userAllHistoryDelete(req,res){
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await HistoryService.userAllHistoryDelete(req.body, userId)
      return ResponseHelper.success(data, 'uaer all history deleted', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

   async getHistory(req,res){
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await HistoryService.getHistory(req.body, userId)
      return ResponseHelper.success(data,'uaer all history', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

}
module.exports = new HistoryController()
