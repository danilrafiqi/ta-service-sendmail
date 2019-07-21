const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("halo berhasil");
});

router.get("/sendmail", (req, res) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "danil.rafiqi@gmail.com",
      pass: "ughdhabkxavxuouz"
    }
  });

  const mailOption = {
    from: "ADMIN",
    to: "muhamaddanilrafiqi@gmail.com",
    subject: "belajar kirim email",
    text: "halo saya masih belajar"
  };

  transport.sendMail(mailOption, (err, info) => {
    if (err) throw err;
    res.send("halo berhasil kirim email");
  });
});

app.use(router);

const port = process.env.PORT || 1234;
app.listen(port, process.env.IP, () => {
  console.log("server berjalan pada port : ", port);
});

module.exports = app;
