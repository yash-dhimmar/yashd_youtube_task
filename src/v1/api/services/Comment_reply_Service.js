const { Comment, Video, Reply } = require('../../../data/models/index')
const reply = require('../../../data/models/reply')

class CommentReplyService {
  async createComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { text, videoId } = body
        let video = await Video.find({ _id: videoId })
        if (video.length > 0) {
          let comment = await Comment.create({
            text, videoId, userId: userId
          })
          resolve(comment)
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }
  async updateComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { commentId, text } = body
        let comment = await Comment.find({ _id: commentId, userId })

        if (comment.length > 0) {
          let updt_comment = await Comment.updateOne({
            _id: commentId
          }, {
            $set: {
              text: text
            }
          })
          console.log("update_comment=======", updt_comment)
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

  async deleteComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { commentId } = body
        let comment = await Comment.find({ _id: commentId })
        if (comment.length > 0) {
          let dlt_comment = await Comment.deleteOne({
            _id: commentId
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

  async getComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let comment = await Comment.find({ userId: userId })
        resolve(comment)

      } catch (error) {
        return reject(error)
      }
    })
  }
  async getCommentByVideoId(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { videoId } = body
        let data = await Comment.find({ videoId: videoId })
          .populate('userId')
          .populate('reply')
          .sort('-createdAt')
        if (data.length > 0) {
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


  async createReply(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { text, commentId } = body

        let comment = await Comment.find({ _id: commentId })
        if (comment.length > 0) {
          let reply = await Reply.create({
            text, commentId, userId: userId
          })
          resolve(reply)
        } else {
          let err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async updateReply(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { replyId, text } = body
        let reply = await Reply.find({ _id: replyId })
        if (reply.length > 0) {
          let update_reply = await Reply.updateOne({ _id: replyId }, { $set: { text: text } })
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

  async deleteReply(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { replyId } = body
        let reply = await Reply.find({ _id: replyId })
        if (reply.length > 0) {
          let update_reply = await Reply.deleteOne({ _id: replyId })
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


}
module.exports = new CommentReplyService()