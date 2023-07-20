const { reject } = require('bluebird')
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

  async deleteHistory(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { historyId } = body
        let data = await History.find({ _id: historyId })
        if (data.length > 0) {
          let dlt = await History.deleteOne({ _id: historyId })
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

  async userAllHistoryDelete(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let dlt = await History.deleteMany({ userId: userId })
        resolve()
      } catch (error) {
        return reject(error)
      }
    })
  }

  async getHistory(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let history = await History.find({ userId })
        resolve(history)
      } catch (error) {
        return reject(error)
      }
    })
  }


}
module.exports = new HistoryService()