const { User,Subscription } = require('../../../data/models/index')
const bcrypt = require('bcrypt')
let CryptoJS = require("crypto-js");
const { generateOTP, sendMails } = require('../../../utills/common')

class SubscriptionService{
async createSubscriber(body,_id){
  return new Promise(async(resolve,reject)=>{
    try{
      let {subscriberId,channelId} =body
      let data = await Subscription.find({
        channelId:channelId,
        subscriberId:subscriberId
      })
      if(!data.length>0){
        let insert = await Subscription.create({
          channelId,subscriberId
        })
        resolve(insert)
      }else{
        let err = {message:"YOU HAVE ALREDY SUBSCRIBE TO THIS CHANNEL"}
        reject(err)
      }
    }catch(error){
      return reject (error)
    }
  })
}
}
module.exports = new SubscriptionService()