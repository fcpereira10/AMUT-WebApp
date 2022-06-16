const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

createUser = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a User",
    });
  }

  const user = new User(body);

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "User created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "User not created!",
      });
    });
};

updateUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "User not found!",
      });
    }
    user.nrUser = body.nrUser;
    user.isAdmin = body.isAdmin;
    user.email = body.email;
    user.password = body.password;
    user.nif = body.nif;
    user.phone = body.phone;
    user.iban = body.iban;
    user.address = body.address;
    user.postalCode = body.postalCode;
    user.local = body.local;
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: "User updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "User not updated!",
        });
      });
  });
};

deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: user });
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
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

loginUser = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    
  });
  if (!user) {
    return res.json({ status: "error", error: "Login Inválido" });
  }
console.log(req.body.password+ " "+ user.password)
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

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
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
      error: "Por favor verifique os dados inseridos",
    });
  }
  if (user.password != null) {
    return res.json({
      status: "error",
      error: "Este Utilizador já existe",
    });
  }
  const newPassword = crypto.randomBytes(8).toString("hex");
  const errorWhileSendingEmail = sendEmail(newPassword, user.email, res);
  
  if (!errorWhileSendingEmail){
    console.log(errorWhileSendingEmail + " error")
    user.password = await bcrypt.hash(newPassword, 10)
    user.save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: user._id,
        message: "User updated!",
      });
    })
    .catch((error) => {
      return res.status(404).json({
        error,
        message: "User not updated!",
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
        const decoded = jwt.verify(req.body.token, "secret123")
        const user = await User.findOne({
            email: decoded.email,
          });
          res.json({user: user, status: 'success'})
    } catch (error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'} )
    }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
  loginUser,
  registerUser,
  sendEmail,
  getUserDataBasedOnToken,
};
