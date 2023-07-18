const { Feeling, Video } = require('../../../data/models/index')

class FeelingService {
  async create(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { type, videoId } = body
        console.log("body=========>", body)
        var data = await Feeling.find({ userId: userId })
        if (data.length > 0) {
          var dlt_like = await Feeling.updateOne({ userId: userId }, { $set: { type: 'blank' } })
          resolve()
        } else {
          var video = await Video.find({ _id: videoId })
          if (video.length > 0) {
            var feeling = await Feeling.create({ type, videoId, userId: userId })
            resolve(feeling)
          } else {
            var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
            reject(err)
          }
        }
      } catch (error) {
        return reject(error)
      }
    })
  }   
}
module.exports = new FeelingService()


