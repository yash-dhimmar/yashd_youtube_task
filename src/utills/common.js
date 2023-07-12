const nodemailer = require('nodemailer')
const smtp = require('smtp-server')
class common {
  generateOTP(n) {
    let digits = '0123456789';
    let otp = '';

    for (let i = 0; i < n; i++) {
      let index = Math.floor(Math.random() * digits.length);

      if (i == 0 && !parseInt(digits[index]))
        i--;
      else
        otp += digits[index];
    }
    return otp;
  };
  sendMails(user) {
    const transport = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port: 587,
      auth: {
        user: "tristate.mteam@gmail.com",
        pass:"nuwuxqxjnogjuwyb"
      }
    });
    if ('otp' in user == true) {
      return transport.sendMail({
        from: 'tristate.mteam@gmail.com',
        to: user.email,
        subject: 'OTP',
        html: `<div>
          <h1>You succesfully signed up!</h1>
          <p>Signup OTP:</p>
          <h1>${user.otp}</h1>
        </div>`
      });
    }
    return transport.sendMail({
      from: 'tristate.mteam@gmail.com',
      to: "yashpra14@gmail.com",
      subject: user.subject,
      // html: `<div>
      //   <h1>User contact details</h1>
      //   <h4>Name: ${user.name}</h4>
      //   <h4>Message: ${user.message}</h4>
      // </div>`
    });
  }
}
module.exports = new common()








// const nodemailer = require('nodemailer')

// const sendEmail = async options => {
//   // create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     auth: {
//       user: process.env.MAIL_USERNAME,
//       pass: process.env.MAIL_PASSWORD
//     }
//   })

//   // send mail with defined transport object
//   const message = {
//     from: `${process.env.FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`, // sender address
//     to: options.email, // list of receivers
//     subject: options.subject, // Subject line
//     text: options.message // plain text body
//   }
//   const info = await transporter.sendMail(message)

//   console.log('Message sent: %s', info)    
// }

// module.exports = sendEmail