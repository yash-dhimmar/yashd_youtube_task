const ResponseHelper = require('../resources/response')
const VideoService = require('../services/VideoService')
const jwt = require('jsonwebtoken')
const Validator = require('../middleware/validation')

class VideoController {
  async uploadVideo(req, res) {
    try {
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await VideoService.uploadVideo(req, userId)
      return ResponseHelper.success(data, 'video uploaded successfully', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }
  async getVideo(req, res) {
    try {
      await Validator.UserGetVideoValidation(req.body)
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await VideoService.getVideo(req.body, userId)
      return ResponseHelper.success(data, 'user upladed video list', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async videoDelete(req, res) {
    try {
      await Validator.DeleteVideoValidation(req.body)
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await VideoService.videoDelete(req, userId)
      return ResponseHelper.success(data, 'video deleted successfully', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async updateView(req, res) {
    try {
      await Validator.UpdateViewValidation(req.body)
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await VideoService.updateView(req, userId)
      return ResponseHelper.success(data, 'view updated successfully', res)
    } catch (error) {
      console.log("error=========>>", error)
      return ResponseHelper.error(error, res)
    }
  }

  async search(req, res) {
    try {
      await Validator.SearchVideoValidation(req.body)
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await VideoService.search(req, res, userId)
      return ResponseHelper.success(data, 'uaer search list', res)
    } catch (error) {
      console.log("error========>", error)
      return ResponseHelper.error(error, res)
    }
  }
}
module.exports = new VideoController()