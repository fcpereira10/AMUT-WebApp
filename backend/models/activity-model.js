const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Activity = new Schema(
    {
        title: { type: String, required: true },
        date: { type: Date, required: true },
        description: { type: String, required: true },
        local: { type: String, required: true },
       /* image: { type: String, required: true },
        tags: { type: String, required: true }, */
    },
    { timestamps: false },
)

module.exports = mongoose.model('activities', Activity)