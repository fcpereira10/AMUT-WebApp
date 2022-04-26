const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userId: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        /* 
        nome: { type: String, required: true },
        nif: { type: String, required: true },
        telemovel: { type: Number, required: false },
        iban: { type: String, required: false },
        morada: { type: String, required: false },
        cod_postal: { type: String, required: false },
        localidade: { type: String, required: false },
        falta os subscritores */
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)