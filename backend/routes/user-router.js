const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.put('/user/:id', UserCtrl.updateUserById)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

router.post('/login', UserCtrl.loginUser)
router.post('/register', UserCtrl.registerUser)
router.post('/getusertoken', UserCtrl.getUserDataBasedOnToken)

module.exports = router