const { Category } = require('../../../data/models/index')

class CategoryService {
  async create(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { title, description } = body
        let category = await Category.create({
          title, description, userId: userId
        })
        
        return resolve(category)
      } catch (error) {
        return reject(error)
      }
    })
  }

  async findAll(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let category_list = await Category.find({userId:userId})
        return resolve(category_list)
      } catch (error) {
        return reject(error)
      }
    })
  }

  async update(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let { title, description, category_id } = body
        let check = await Category.find({
          _id: category_id,

        })
        if (check.length > 0) {
          let update_data = await Category.updateOne({
            _id: category_id
          }, {
            $set: {
              title: title,
              description: description
            }
          })
          resolve()
        } else {
          let err = { message: "THIS ID IS NOT FOUND PLEASE ENTER A VALID ID" }
          reject(err)
        }

      } catch (error) {
        return reject(error)
      }
    })
  }

  async deleteData(body, userId) {
    return new Promise(async (resolve, reject) => {
      try {
        let {category_id} = body
        let check = await Category.find({
          _id: category_id,
        })
        if (check.length > 0) {
          let delete_data = await Category.deleteOne({
            _id: category_id
          })
          resolve()
        } else {
          let err = { message: "THIS ID IS NOT FOUND PLEASE ENTER A VALID ID" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }
}
module.exports = new CategoryService()