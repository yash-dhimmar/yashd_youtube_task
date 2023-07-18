
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const CommentSchema = new Schema({
    text: {
      type: String,                                                                                                                                                                                                                                                                                                                                
    },
    videoId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Video',                                                                                                                                                                                                                                                                                                 
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },

  },
    { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true },
  );
  CommentSchema.virtual('reply', {
    ref: 'Reply',
    localField: '_id',
    foreignField: 'commentId',
    justOne: false,
  
    options: { sort: { createdAt: -1 } }
  })
  return mongoose.model('Comment', CommentSchema, 'comment')
};
























