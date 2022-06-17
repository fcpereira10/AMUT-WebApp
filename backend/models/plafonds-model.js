const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Plafonds = new Schema(
    {   
        userId: {type: String, required: true},
        medicinesYearly: { type: Number, required: true },
        medicinesUsed: { type: Number, required: true },
        ambulatoryYearly: { type: Number, required: true },
        ambulatoryUsed: { type: Number, required: true },
        dentistYearly: { type: Number, required: true },
        dentistUsed: { type: Number, required: true },
        prosthesisYearly: { type: Number, required: true },
        prosthesisUsed: { type: Number, required: true },
    },
    { timestamps: true },
)


module.exports = mongoose.model('plafonds', Plafonds)