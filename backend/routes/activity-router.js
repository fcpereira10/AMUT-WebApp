const express = require('express')

const ActivityCtrl = require('../controllers/activity-ctrl')

const router = express.Router()

router.post('/atividade', ActivityCtrl.createActivity)
router.put('/atividade/:id', ActivityCtrl.updateActivity)
router.delete('/atividade/:id', ActivityCtrl.deleteActivity)
router.get('/atividade/:id', ActivityCtrl.getActivityById)
router.get('/atividades', ActivityCtrl.getActivities)

module.exports = router