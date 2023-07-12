const { User } = require('../../../data/models/index')
const bcrypt = require('bcrypt')
var CryptoJS = require("crypto-js");
const { generateOTP, sendMails } = require('../../../utills/common')
//const pm2 = require('pm2')

class AuthService {
  async signup(body) {
    return new Promise(async (resolve, reject) => {
      try {
        let { channelName, email, password ,mobile_number,role} = body
        var details = await User.find({ email: email })

        if (!details.length > 0) {
          var hash_password = await bcrypt.hashSync(password, 10)
          // Generate random 16 bytes to use as IV
          // var IV = CryptoJS.lib.WordArray.random(16);

          // var keyString = "DHIMMARYASHAAAAA";//KEY TO DECRYPTE TO MESSAGE
          // // finds the SHA-256 hash for the keyString
          // var Key = CryptoJS.SHA256(keyString);

          // function encrypt(data) {
          //   var val = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
          //   var encrypted = CryptoJS.AES.encrypt(val, Key, { iv: IV }).toString();
          //   var b64 = CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Hex);
          //   return b64;
          // }
          var insert = await User.create({ channelName, email, password: hash_password ,mobile_number,role})
          // var data1 = {
          //   channelName: "dhimmar yash",
          //   email: "yash123@gmail.com",
          //   password: "yash123"
          // };
          // Set local variables to postman
          // pm.set("encrypted", encrypt(data1));
          // pm.set("IV", IV.toString());
          // var data = await User.create({ data1 })
          resolve(insert)

        } else {
          var err = { message: "YOU ARE ALREDY SIGNUP TO THIS EMAIL" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async login(body) {
    return new Promise(async (resolve, reject) => {
      try {
        let { email, password } = body
        var data = await User.find({ email: email })
        if (data.length > 0) {
          var ismatch_password = await bcrypt.compareSync(password, data[0].password)
          if (ismatch_password) {
            return resolve(data)
          } else {
            var err = { message: "INVALID PASSWORD" }
            reject(err)
          }
        } else {
          var err = { message: "PLEASE SIGN UP" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async forgotPassword(body, email) {
    return new Promise(async (resolve, reject) => {
      try {
        var data = await User.find({ email: email })
        if (data) {
          let otp = await generateOTP(4);
          console.log("email====>", otp)
          await User.updateOne({ email: email }, { $set: { otp: otp } })
          await sendMails({ email, otp })
          return resolve()
        } else {
          var err = { message: "THERE IS NO USER WITH THAT EMAIL" }
          reject(err)
        }
      } catch (error) {
        return reject(error)
      }
    })
  }

  async resetPassword(body, _id) {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          old_password, new_password, _id
        } = body

        let hash = await bcrypt.hashSync(new_password, 10); //Encrypt new password;
        const user = await User.find({
          _id: _id
        });

        if (await bcrypt.compareSync(old_password, user[0].password) == false) {
          throw { statusCode: 200, message: 'Incorrect old password!' }
        }
        // Update new password in users table:
        await User.updateOne({ password: hash }, {
          where: { _id: _id }
        });
        return resolve()
      } catch (error) {
        return reject(error)
      }
    })
  }

}
module.exports = new AuthService()