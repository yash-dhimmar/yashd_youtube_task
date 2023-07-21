
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
let ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const userTokenSchema = new Schema({
    refreshToken: {
      type: String,
      required:true,
    },
    accessToken: {
        type: String,
        required:true,
      },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
     
    },
    createdAt: { type: Date, default: Date.now, expires: 30 * 86400 }, // 30 days

  },
    { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true },
  );

return mongoose.model('UserToken', userTokenSchema, 'usertoken')
};































// const mongoose = require("mongoose");

// const { Schema } = mongoose;
// module.exports = (mongoose) => {
//     const userTokenSchema = new Schema({
//         userId: { type: Schema.Types.ObjectId, required: true, ref: 'User', },
//         token: { type: String, required: true },
//         createdAt: { type: Date, default: Date.now, expires: 30 * 86400 }, // 30 days
//     });

//     return mongoose.model("UserToken", userTokenSchema);
// }























