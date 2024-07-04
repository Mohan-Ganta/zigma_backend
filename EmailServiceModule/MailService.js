const nodemailer = require('nodemailer')
const mailSender = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: 'teamzigmabank04@gmail.com',
      pass: 'hwhyhsfbvzwqkafa',
    },
  }
)

module.exports = mailSender