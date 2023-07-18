
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const ReplySchema = new Schema({
    text: {
      type: String,
    },
    commentId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Comment',
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },

  },
    { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true },
  );

  ReplySchema.pre('find', function () {
    this.populate({
      path: 'userId',
      select: 'channelName photoUrl',
      sort: '+createdAt'
    })
  })


  return mongoose.model('Reply', ReplySchema, 'reply')
};
























