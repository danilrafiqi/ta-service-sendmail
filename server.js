const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "danil.rafiqi@gmail.com",
      pass: "ughdhabkxavxuouz"
    }
  });

  const mailOption = {
    from: `${req.body.from} <tourinc@tourinc.dev>`,
    to: [],
    bcc: `${req.body.to}`,
    subject: `${req.body.subject}`,
    text: `${req.body.message}`
  };

  transport.sendMail(mailOption, (err, info) => {
    if (err) {
      res.json({ status: "err", message: err, data: null });
    } else {
      res.json({ status: "success", message: info, data: req.body });
    }
  });
});

const port = process.env.PORT || 1234;
app.listen(port, process.env.IP, () => {
  console.log("server berjalan pada port : ", port);
});

module.exports = app;
