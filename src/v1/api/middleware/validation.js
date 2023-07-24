const promise = require('bluebird');
const Joi = require('joi');
class Validator {
  async signupValidation(body) {
    try {
      const joiSchema = Joi.object({
        channelName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        mobile_number: Joi.string().length(10).required(),
        role: Joi.string().required()
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async loginValidation(body) {
    try {
      const joiSchema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }
  async RefreshTokenValidation(body) {
    try {
      const joiSchema = Joi.object({
        refreshToken: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);      
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);          
    }
  }
  async ResetPasswordValidation(body) {
    try {
      const joiSchema = Joi.object({
        old_password: Joi.string().required(),
        new_password: Joi.string().required(),
        _id: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async createCategoryValidation(body) {
    try {
      const joiSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async UpdateCategoryValidation(body) {
    try {
      const joiSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        category_id: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async DeleteCategoryValidation(body) {
    try {
      const joiSchema = Joi.object({
        category_id: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async CreateCommentValidation(body) {
    try {
      const joiSchema = Joi.object({
        video_id: Joi.string().required(),
        text: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async UpdateCommentValidation(body) {
    try {
      const joiSchema = Joi.object({
        text: Joi.string().required(),
        commentId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async DeleteCommentValidation(body) {
    try {
      const joiSchema = Joi.object({
        commentId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

async GetCommentByVideoIdValidation(body) {
    try {
      const joiSchema = Joi.object({
        videoId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async CreateReplyValidation(body) {
    try {
      const joiSchema = Joi.object({
        commentId: Joi.string().required(),
        text: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async UpdateReplyValidation(body) {
    try {
      const joiSchema = Joi.object({
        replyId: Joi.string().required(),
        text: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async DeleteReplyValidation(body) {
    try {
      const joiSchema = Joi.object({
        replyId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async CreateHistoryValidation(body) {
    try {
      const joiSchema = Joi.object({
        searchText: Joi.string().required(),
        type: Joi.string().required(),
        videoId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async DeleteHistoryValidation(body) {
    try {
      const joiSchema = Joi.object({
        historyId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async CreateReactionValidation(body) {
    try {
      const joiSchema = Joi.object({
        type: Joi.string().required(),
        videoId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async UserGetVideoValidation(body) {
    try {
      const joiSchema = Joi.object({
        videoId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async DeleteVideoValidation(body) {
    try {
      const joiSchema = Joi.object({
        videoId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async UpdateViewValidation(body) {
    try {
      const joiSchema = Joi.object({
        videoId: Joi.string().required(),
      });
      return await joiSchema.validateAsync(body);
    } catch (err) {
      //let error = { message: e.details ? e.details[0].message : e.message, code: 400 };
      let error = { message: err.message, code: 400 };
      return promise.reject(error);
    }
  }

  async SearchVideoValidation(body) {
    try {
      const joiSchema = Joi.object({
        text: Joi.string().required(),
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