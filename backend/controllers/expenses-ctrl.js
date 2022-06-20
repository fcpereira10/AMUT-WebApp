const { default: mongoose } = require("mongoose");
const Expenses = require("../models/expenses-model");
const fs = require('fs')

createExpense = (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a Expense',
      })
  }

  const expense = new Expenses(body)

  if (!expense) {
      return res.status(400).json({ success: false, error: err })
  }

  expense
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: expense._id,
              message: 'Expense created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              success: false,
              message: 'Expense not created!',
          })
      })
}

getExpensesByUser = async (req, res) => {

  const query = { "userId":  req.params.id  }

  await Expenses.find(query, (err, expenses)=> {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    console.log("expenses " +expenses)
    if (!expenses) {
      return res.status(404).json({ success: false, error: `Expenses not found` });
    }
    return res.status(200).json({ success: true, expenses: expenses });
  }).catch((err) => console.log(err));
};

uploadFiles = async (req, res) => {
  console.log("upload files");
  const newpath = __dirname + "/files/";
  const files = req.files.files;
  files.forEach((file) => 
    file.mv(`${newpath}${file.name}`, (err) => {
      if (err) {
        return res.status(500).send({ message: "File upload failed "+ err, code: 500 });
      }
    }));
  return res.status(200).send({ message: "Files Uploaded", code: 200 });
}

module.exports = {
  createExpense,
  getExpensesByUser,
  uploadFiles
};
