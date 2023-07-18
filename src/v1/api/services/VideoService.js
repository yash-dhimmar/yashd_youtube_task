const { Video, Category } = require('../../../data/models/index')
const path = require('path')

class VideoService {

  async uploadVideo(req, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          title, description, video, categoryId
        } = req.body

        var check = await Category.find({
          _id: categoryId
        })
        if (check.length > 0) {
          var data = await Video.create({
            title, description, video: req.file.filename, categoryId, userId
          })
          return resolve(data)
        } else {
          var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async getVideo(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        var get_video = await Video.find({
          userId: userId
        })
        resolve(get_video)
      } catch (error) {
        return reject(error)
      }
    })
  }

  async videoDelete(req, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { videoId } = req.body
        var data = await Video.find({ _id: videoId })
        if (data.length > 0) {
          var dlt_video = await Video.deleteOne({
            _id: videoId
          })
          resolve()
        } else {
          var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }
  async updateView(req, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        var video = Video
        let { videoId, views } = req.body
        var video = await Video.findOne({ _id: videoId })
        if (video) {
          video.views++
          await video.save()
          //  await Video.updateOne({ _id: videoId }, { $set: { views:` ${video}` + video} })
          resolve()
        } else {
          var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

}
module.exports = new VideoService()