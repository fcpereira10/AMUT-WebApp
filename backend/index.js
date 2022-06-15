const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileupload = require("express-fileupload");

const db = require('./db')
const ActivityRouter = require('./routes/activity-router')
const NewsRouter = require('./routes/news-router')
const UserRouter = require('./routes/user-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(fileupload())

const path = require('path')
app.use('/static', express.static(path.join(__dirname, '/controllers/activities')))
app.use('/static', express.static(path.join(__dirname, '/controllers/news')))



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send(`Server running on port ${apiPort}`)
})

app.use('/api', ActivityRouter)
app.use('/api', NewsRouter)
app.use('/api', UserRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

