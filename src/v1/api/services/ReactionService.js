
const { Reaction, Video } = require('../../../data/models/index')
var mongoose = require('mongoose')

class ReactionService {
  async createReaction(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { type, videoId } = body
        var video = await Video.find({ _id: videoId })
        if (video.length > 0) {
          var feeling = await Reaction.find({ videoId: videoId, userId: userId })
          if (feeling.length > 0) {
            var dlt = await Reaction.deleteOne({ videoId: videoId, userId: userId })
            var dlt = { message: "like and dislike deleted successfully" }
            reject(dlt)
          } else {
            var insert = await Reaction.create({ type, videoId, userId: userId })
            resolve()
          }
        } else {
          var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async getReaction(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Reaction.aggregate([
          { $match: { userId:  new mongoose.Types.ObjectId(userId) } },
          {
            $lookup: {
              from: "Video",
              localField: "videoId",
              foreignField: "_id",
              as: "feeling"
            }
          },
          {
            $project: {
              "_id": 0,
              feeling: { _id: 1, title: 1, description: 1, views: 1, thumbnailUrl: 1, video: 1 }
            }
          }
        ])
        let result = data.map(({feeling }) => feeling[0])
        resolve(result)
      } catch (error) {
        return reject(error)
      }
    })
  }
}
module.exports = new ReactionService()


