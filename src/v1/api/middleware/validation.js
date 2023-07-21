const promise = require('bluebird');
const Joi = require('joi');
class Validator {
  async signupValidation(body) {
    try {
      const joiSchema = Joi.object({
        channelname: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        mobilenumber: Joi.string().length(10).required(),
        role: Joi.string().required()
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }
}
module.exports = new Validator()