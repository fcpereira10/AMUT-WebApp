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

    if (!expenses) {
      return res.status(404).json({ success: false, error: `Expenses not found` });
    }
    
    expenses.forEach((expense) => {

      expense.invoiceFile = getFilesByName(expense.id+"-invoice");
      expense.prescriptionFile = getFilesByName(expense.id+"-prescription");
      expense.prescriptionFile = getFilesByName(expense.id+"-statement");
      console.log(expense.invoiceFile);
      
    })
    return res.status(200).json({ success: true, expenses: expenses });
  }).catch((err) => console.log(err));
};

getFilesByName = (name) => {
  const newpath = __dirname + "/files/";
  const files = fs.readdirSync(newpath);
  files.forEach(file => {
    console.log("get files by name "+ file+" "+name)
    if(file.startsWith(name)) {
      return file.name;
    }
    
   
  })
  return null;
}
uploadFiles = async (req, res) => {
  console.log("upload files");
  const newpath = __dirname + "/files/";
  const files = req.files.files;
  let invoiceFile, prescriptionFile, statementFile;
  files.forEach((file) => 
    file.mv(`${newpath}${file.name}`, (err) => {
      if (err) {
        return res.status(500).send({ message: "File upload failed "+ err, code: 500 });
      }
      const fileExtension = file.name.substr(file.name.indexOf("-") + 1, 
      file.name.lastIndexOf("."));
      switch (fileExtension) {
        case "invoice":
          invoiceFile = file.name;
          break;
        case "prescription":
          prescriptionFile = file.name;
          break;
        case "statement":
          statementFile = file.name;
          break;
        default:
      }
    }));
    const obj = await Expenses.findByIdAndUpdate(req.params.id, {
      invoiceFile: invoiceFile, 
      prescriptionFile: prescriptionFile,
      statementFile: statementFile, 
    },{new: true})
    console.log(obj)
  return res.status(200).send({ message: "Files Uploaded", code: 200 });
}

module.exports = {
  createExpense,
  getExpensesByUser,
  uploadFiles
};
