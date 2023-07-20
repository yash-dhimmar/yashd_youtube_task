
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
let ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const RefreshTokenSchema = new Schema({
    token: {
      type: String,
    },
    expiryDate: {
      type: Date,
    },
     userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    
  }, {
    timestamps: true
  });

  RefreshTokenSchema.createToken = async function (user) {
    let expiredAt = new Date();

    expiredAt.setSeconds(expiredAt.getSeconds() + 600);

    let _token = uuidv4();

    let refreshToken = await this.create({
      token: _token,
      userId: user.id,
      expiryDate: expiredAt.getTime(),
    });

    return refreshToken.token;
  };

  RefreshTokenSchema.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
  };
  

  console.log("RefreshTokenSchema=========>",RefreshTokenSchema)

  return mongoose.model('RefreshToken', RefreshTokenSchema, 'refreshtoken')

  return RefreshTokenSchema;
  
};






















