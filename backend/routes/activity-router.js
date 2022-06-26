const express = require('express')

const ActivityCtrl = require('../controllers/activity-ctrl')

const router = express.Router()

router.post('/activity', ActivityCtrl.createActivity)
router.put('/activity/:id', ActivityCtrl.updateActivity)
router.delete('/activity/:id', ActivityCtrl.deleteActivity)
router.get('/activity/:id', ActivityCtrl.getActivityById)
router.get('/activities', ActivityCtrl.getActivities)
router.get('/activities/recent', ActivityCtrl.getMostRecentActivity)
router.post('/uploadActivityImage', ActivityCtrl.uploadActivityImage)
router.get('/pastActivities', ActivityCtrl.getPastActivities)
router.get('/futureActivities', ActivityCtrl.getFutureActivities)

module.exports = router