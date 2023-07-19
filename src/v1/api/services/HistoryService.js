const { Category, History, Video } = require('../../../data/models/index')

class HistoryService {
  async createHistory(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { searchText, type, videoId } = body

        let video = await Video.find({ _id: videoId })
        if (video.length > 0) {
          let history = await History.create({
            type, searchText, videoId, userId: userId
          })
          resolve(history)
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }

      } catch (error) {
        return reject(error)
      }
    })
  }
}
module.exports = new HistoryService()