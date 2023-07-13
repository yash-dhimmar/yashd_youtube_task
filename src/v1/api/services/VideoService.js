const { Video, Category } = require('../../../data/models/index')
const path = require('path')

class VideoService {

  async upload_video(req, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          title, description, video, categoryId
        } = req.body

        var check = await Category.find({
          _id: categoryId
        })
        if (check.length>0) {
          var data = await Video.create({
            title, description, video: req.file.filename, categoryId, userId
          })
          return resolve(data)
        }else{
          var err = {message:"ID NOT FOUND PLEASE ENTER VALID ID"}
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async getVideo(body,userId){
    return new Promise(async(resolve,reject)=>{
      try{
       var get_video= await Video.find({
        userId:userId
       })
       resolve(get_video)
      }catch(error){
        return reject(error)
      }
    })
  }

}
module.exports = new VideoService()