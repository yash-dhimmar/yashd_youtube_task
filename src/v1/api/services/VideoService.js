const { Video, Category, User } = require('../../../data/models/index')
const path = require('path')

class VideoService {
  async uploadVideo(req, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          title, description, video, categoryId
        } = req.body

        let check = await Category.find({
          _id: categoryId
        })
        if (check.length > 0) {
          let data = await Video.create({
            title, description, video: req.file.filename, categoryId, userId
          })
          return resolve(data)
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
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
        let { videoId } = body
        let data = await Video.find({ _id: videoId })
          .populate({
            path: 'categoryId'
          }).populate({ path: 'userId', select: 'channelName subscribers photoUrl' })
          .populate({ path: 'likes' })
          .populate({ path: 'dislikes' })
          .populate({ path: 'comment' })

        if (data) {
          console.log("video=========>", data)
          resolve(data)
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }

      } catch (error) {
        return reject(error)
      }
    })
  }
  async videoDelete(req, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { videoId } = req.body
        let data = await Video.find({ _id: videoId })
        if (data.length > 0) {
          let dlt_video = await Video.deleteOne({
            _id: videoId
          })
          resolve()
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
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
        
        let { videoId, views } = req.body
        let video = await Video.findOne({ _id: videoId })
        if (video) {
          video.views++
          await video.save()
          //  await Video.updateOne({ _id: videoId }, { $set: { views:` ${video}` + video} })
          resolve()
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }
  async search(req, res, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { text } = req.body
        let searching = text.trim();

        let channels = await User.aggregate([
          {
            $match:
              { channelName: new RegExp(searching) }
          }, 
          //{
          //   $project: {
          //     "_id": 0,
          //     add_to_cart: { _id: 1, channelname: 1 }
          //   }
          // }
        ])
        let videos = await Video.aggregate([{ $match: { title: new RegExp(searching) } }])

        channels.push(...videos)

        let search = channels

        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 2
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const total = search.length
        const totalPage = Math.ceil(total / limit)

        if (parseInt(req.query.limit) !== 0) {
          search = search.slice(startIndex, endIndex)
        }

        // Pagination result
        const pagination = {}
        if (endIndex < total) {
          pagination.next_page = {
            page: page + 1,
            limit
          }
        }
        if (startIndex > 0) {
          pagination.previous_page = {
            page: page - 1,
            limit
          }
        }
        if (parseInt(req.query.limit) !== 0) {
          res.status(200).json({
            success: 200,
            count: search.length,
            totalPage,
            pagination,
            data: search
          })
        } else {
          res.status(200).json({
            success: true,
            data: search
          })
        }

      } catch (error) {
        return reject(error)
      }
    })
  }
}
module.exports = new VideoService()