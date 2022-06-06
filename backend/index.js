const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileupload = require("express-fileupload");

const db = require('./db')
const ActivityRouter = require('./routes/activity-router')
const NewsRouter = require('./routes/news-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(fileupload())
app.use(express.static("files"));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send(`Server running on port ${apiPort}`)
})

app.use('/api', ActivityRouter)
app.use('/api', NewsRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

