const express = require("express");

const ExpensesCtrl = require("../controllers/expenses-ctrl");

const router = express.Router();

router.post("/expense", ExpensesCtrl.createExpense);
router.get("/expenses/:id", ExpensesCtrl.getExpensesByUser);
router.post("/expenses/uploadFiles/:id", ExpensesCtrl.uploadFiles)

module.exports = router;
