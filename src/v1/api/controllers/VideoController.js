const ResponseHelper = require('../resources/response')
const VideoService = require('../services/VideoService')
const jwt = require('jsonwebtoken')

class VideoController {
  async upload_video(req, res) {
    try {
      var token = req.headers.authorization
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await VideoService.upload_video(req, userId)
      return ResponseHelper.success(data, 'video uploaded successfully',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }
  async getVideo(req, res) {
    try {
      var token = req.headers.authorization
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await VideoService.getVideo(req, userId)
      return ResponseHelper.success(data, 'user upladed video list',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async video_delete(req, res) {
    try {
      var token = req.headers.authorization
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await VideoService.video_delete(req, userId)
      return ResponseHelper.success(data, 'video deleted successfully',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async update_view(req, res) {
    try {
      var token = req.headers.authorization
      var decodedData = jwt.verify(token, 'secretkey')
      var userId = decodedData.user[0]._id
      var data = await VideoService.update_view(req, userId)
      return ResponseHelper.success(data, 'view updated successfully',res)
    } catch (error) {
      console.log("error=========>>",error)
      return ResponseHelper.error(error, res)
    }
  }
}
module.exports = new VideoController()