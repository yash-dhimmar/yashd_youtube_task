const jwt = require('jsonwebtoken')
const ResponseHelper = require('../resources/response')

class GlobalAuthClass {
  async authenticate(req, res, next) {
    try {
      if ('authorization' in req.headers && req.headers.authorization != null) {
        let token = req.headers.authorization;
        console.log("token======>", token)
        // console.log("decodedData====>",decodedData)
        let decodedData = jwt.verify(token, 'secretkey')
      
        if (decodedData.iat < decodedData.exp) {
          next()
        }
      } else {
        throw new Error('Authorization token is missing');
      }
    } catch (error) {
      console.log("error========>", error)
      return ResponseHelper.error(error, res)
    }
  }
}
module.exports = new GlobalAuthClass()