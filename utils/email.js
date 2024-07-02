const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `${process.env.EMAIL_FROM}`;
  }

  newTransport() {
    // const env = process.env.NODE_ENV;
    // switch (env) {
    //   case "development":
    //     return nodemailer.createTransport({
    //       host: process.env.EMAIL_HOST,
    //       port: process.env.EMAIL_PORT,
    //       auth: {
    //         user: process.env.EMAIL_USERNAME,
    //         pass: process.env.EMAIL_PASSWORD,
    //       },
    //     });
    //   case "production":
    //     return nodemailer.createTransport({
    //       service: "SendGrid",
    //       host: process.env.SENDGRID_HOST,
    //       port: process.env.SENDGRID_PORT,
    //       auth: {
    //         user: process.env.SENDGRID_USERNAME,
    //         pass: process.env.SENDGRID_PASSWORD,
    //       },
    //     });
    //   default:
    //     console.log("خخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخخ ايييييييي");
    // }
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "SendGrid",
        host: process.env.SENDGRID_HOST,
        port: process.env.SENDGRID_PORT,
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      },
    );
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    await this.newTransport().sendMail(mailOptions);
    // await transporter.sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to the Natours Family");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Your password reset token (Valid for only 10 mins)",
    );
  }
};
