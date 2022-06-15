const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        nrUser: { type: String, required: true },
        isAdmin: { type: Boolean, required: true },
        email: { type: String, required: true },
        password: { type: String, required: false },
        name: { type: String, required: true },
        nif: { type: String, required: true },
        phone: { type: Number, required: false },
        iban: { type: String, required: false },
        address: { type: String, required: false },
        postalCode: { type: String, required: false },
        local: { type: String, required: false },
        /*falta os subscritores */
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)