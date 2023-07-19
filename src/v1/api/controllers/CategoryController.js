const ResponseHelper = require('../resources/response')
const CategoryService = require('../services/CategoryService')
const jwt = require('jsonwebtoken')

class CategoryController {
  async create(req, res) {
    try {
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await CategoryService.create(req.body, userId)
      return ResponseHelper.success(data, 'category created successfully',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async findAll(req, res) {
    try {
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await CategoryService.findAll(req.body, userId)
      return ResponseHelper.success(data, 'category list',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async update(req, res) {
    try {
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await CategoryService.update(req.body, userId)
      return ResponseHelper.success(data, 'category update successfully',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }

  async deleteData(req, res) {
    try {
      let token = req.headers.authorization
      let decodedData = jwt.verify(token, 'secretkey')
      let userId = decodedData.user[0]._id
      let data = await CategoryService.deleteData(req.body, userId)
      return ResponseHelper.success(data, 'category deleted successfully',res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }
}
module.exports = new CategoryController()