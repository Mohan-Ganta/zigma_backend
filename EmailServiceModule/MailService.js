const nodemailer = require('nodemailer')
const mailSender = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: 'zigmabank@gmail.com',
      pass: 'vimjnktyecfnfhhh',
    },
  }
)

module.exports = mailSender