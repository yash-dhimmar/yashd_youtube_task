
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
let ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const SubscriptionSchema = new Schema({
    subscriberId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Subscriber id is required']
    },
    channelId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
  }, {   
    timestamps: true
  });
  return mongoose.model('Subscription', SubscriptionSchema, 'subscription')
};
