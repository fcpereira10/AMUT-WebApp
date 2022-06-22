const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

updateUserById = async (req, res) => {
  const user = await User.findOne({
    _id: req.params.id,
  })
    .clone()
    .exec();

  if (!user) {
    return res.json({
      success: false,
      message: "Erro ao encontrar Utilizador",
    });
  }

  if ( req.body.password !== undefined ) {
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordValid) {
      user.password = await bcrypt.hash(req.body.newPassword, 10);
    } else {
      return res.json({
        success: false,
        message: "Senha Errada! Verifique a Senha Atual.",
      });
    }
  }

  await User.findOneAndUpdate(
    { _id: req.params.id },
    { password: user.password,
    email: req.body.email ,
    nif: req.body.nif ,
    phone: req.body.phone ,
    iban: req.body.iban ,
    address: req.body.address ,
    postalCode: req.body.postalCode ,
    local: req.body.local },
    (err, user) => {
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "Dados Atualizados com sucesso",
      });
    })
      .clone()
  .exec();
};

getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, user: user });
  }).catch((err) => console.log(err));
};

getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, users: users });
  }).catch((err) => console.log(err));
};

loginUser = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user || !user.password) {
    return res.json({ success: false, error: "Utilizador não registado!" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ success: true, user: token, isAdmin: user.isAdmin });
  } else {
    return res.json({
      success: false,
      user: false,
      error: "Verifique a Senha!",
    });
  }
};

registerUser = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    nif: req.body.nif,
  });
  if (!user) {
    return res.json({
      status: "error",
      message: "Por favor verifique os dados inseridos!",
    });
  }
  if (user.password != null) {
    return res.json({
      status: "error",
      message:
        "Já foi gerada uma password para este utilizador. Verifique a sua caixa de correio!",
    });
  }
  const newPassword = crypto.randomBytes(8).toString("hex");
  const errorWhileSendingEmail = sendEmail(newPassword, user.email, res);

  if (!errorWhileSendingEmail) {
    user.password = await bcrypt.hash(newPassword, 10);
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message:
            "Utilizador Registado! A password foi enviada para o seu email",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Utilizador não registado!",
        });
      });
  }
};
sendEmail = (password, email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amutfrancisco@gmail.com",
      pass: "imhcukmugirafrpg",
    },
  });
  let mailOptions = {
    from: '"Website AMUT" <amutfrancisco@gmail.com>',
    to: email,
    subject: `Registo Website AMUT`,
    html: `A password é: ${password}`,
  };
  let error = false;
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      error = true;
    }
  });
  return error;
};

getUserDataBasedOnToken = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, "secret123");
    const user = await User.findOne({
      email: decoded.email,
    });
    const returnUser = {
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      nrUser: user.nrUser,
      id: user._id,
    };
    res.json({ user: returnUser, status: "success" });
  } catch (error) {
    res.json({ status: "error", error: "invalid token" });
  }
};

module.exports = {
  updateUserById,
  getUsers,
  getUserById,
  loginUser,
  registerUser,
  sendEmail,
  getUserDataBasedOnToken,
};
