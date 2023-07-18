const { Comment, Video, Reply } = require('../../../data/models/index')
const reply = require('../../../data/models/reply')

class CommentReplyService {
  async createComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { text, videoId } = body
        var video = await Video.find({ _id: videoId })
        if (video.length > 0) {
          var comment = await Comment.create({
            text, videoId, userId: userId
          })
          resolve(comment)
        } else {
          var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
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
        var comment = await Comment.find({ _id: commentId, userId })

        if (comment.length > 0) {
          var updt_comment = await Comment.updateOne({
            _id: commentId
          }, {
            $set: {
              text: text
            }
          })
          console.log("update_comment=======", updt_comment)
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

  async deleteComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { commentId } = body
        var comment = await Comment.find({ _id: commentId })
        if (comment.length > 0) {
          var dlt_comment = await Comment.deleteOne({
            _id: commentId
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

  async getComment(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        var comment = await Comment.find({ userId: userId })
        resolve(comment)

      } catch (error) {
        return reject(error)
      }
    })
  }


  async createReply(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { text, commentId } = body

        var comment = await Comment.find({ _id: commentId })
        if (comment.length > 0) {
          var reply = await Reply.create({
            text, commentId, userId: userId
          })
          resolve(reply)
        } else {
          var err = { message: "ID NOT FOUND PLEASE ENTER VALID ID" }
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
        var reply = await Reply.find({ _id: replyId })
        if (reply.length > 0) {
          var update_reply = await Reply.updateOne({ _id: replyId }, { $set: { text: text } })
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

  async deleteReply(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { replyId } = body
        var reply = await Reply.find({ _id: replyId })
        if (reply.length > 0) {
          var update_reply = await Reply.deleteOne({ _id: replyId })
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

  async getCommentByVideoId(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { videoId } = body
        var data = await Comment.find({ videoId: videoId })
          .populate('userId')
          .populate('reply')
          .sort('-createdAt')
        if (data.length > 0) {
          resolve(data)
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
module.exports = new CommentReplyService()