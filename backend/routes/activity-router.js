const express = require('express')

const ActivityCtrl = require('../controllers/activity-ctrl')

const router = express.Router()

router.post('/atividade', ActivityCtrl.createActivity)
router.put('/atividades/:id', ActivityCtrl.updateActivity)
router.delete('/atividades/:id', ActivityCtrl.deleteActivity)
router.get('/atividades/:id', ActivityCtrl.getActivityById)
router.get('/atividades', ActivityCtrl.getActivities)

module.exports = router