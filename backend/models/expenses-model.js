const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Expenses = new Schema(
    {   
        invoiceNr: {type: Number, required: true},
        name: {type: String, required: true},
        date: { type: Date, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        userId: {type: String, required: true},
    },
    { timestamps: true },
)


module.exports = mongoose.model('expenses', Expenses)