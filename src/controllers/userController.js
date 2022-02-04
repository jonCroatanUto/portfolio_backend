const axios = require("axios");
require("dotenv").config();
const { RAPID_API_KEY } = process.env;
async function contactWithJonEmail(req, res) {
  const { emailFrom, subject, message } = req.body;

  console.log(emailFrom);
  try {
    axios({
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      data: {
        personalizations: [
          {
            to: [{ email: "jon.garciaorad.asencor@gmail.com" }],
            subject: ` ${subject}`,
          },
        ],
        from: { email: ` ${emailFrom}` },
        content: [{ type: "text/plain", value: `${message}` }],
      },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        "x-rapidapi-key": `${RAPID_API_KEY}`,
      },
    }).then((response) => {
      return res.status(200).send({
        status: `${response.statusText}`,
        message: `Your message was correctly delivered from ${emailFrom} at ${response.headers.date}`,
      });
    });
  } catch (error) {
    return res.status(500).send({
      errorMessage: error.message,
    });
  }
}
module.exports = {
  contactWithJonEmail: contactWithJonEmail,
};
