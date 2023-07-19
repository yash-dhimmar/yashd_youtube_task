const ResponseHelper = require('../../api/resources/response')
const { User } = require('../../../data/models/index')
const SubscriptionService = require('../services/SubscriptionService')
const jwt = require('jsonwebtoken')
class SubscriptionController {

  async createSubscriber(req, res) {
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let _id = decodedData.user[0]._id
      let data = await SubscriptionService.createSubscriber(req.body, _id)
      return ResponseHelper.success(data, 'subscription successfully', res)
    } catch (error) {
      return ResponseHelper.error(error, res)
    }
  }
}
module.exports = new SubscriptionController()