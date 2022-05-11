const Activity = require('../models/activity-model')

createActivity = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Activity',
        })
    }

    const activity = new Activity(body)

    if (!activity) {
        return res.status(400).json({ success: false, error: err })
    }

    activity
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: activity._id,
                message: 'Activity created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Activity not created!',
            })
        })
}

updateActivity = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Activity.findOne({ _id: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Activity not found!',
            })
        }
        activity.name = body.name
        activity.time = body.time
        activity.rating = body.rating
        activity
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: activity._id,
                    message: 'Activity updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Activity not updated!',
                })
            })
    })
}

deleteActivity = async (req, res) => {
    await Activity.findOneAndDelete({ _id: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!activity) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }

        return res.status(200).json({ success: true, data: activity })
    }).catch(err => console.log(err))
}

getMostRecentActivity = async (req, res) => {
    await Activity.find({}, (err, activities) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!activities.length) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: activities[0] })
    }).catch(err => console.log(err))
}

getActivityById = async (req, res) => {
    await Activity.findOne({ _id: req.params.id }, (err, activity) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!activity) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: activity })
    }).catch(err => console.log(err))
}

getActivities = async (req, res) => {
    await Activity.find({}, (err, activities) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!activities.length) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: activities })
    }).catch(err => console.log(err))
}

module.exports = {
    createActivity,
    updateActivity,
    deleteActivity,
    getActivities,
    getActivityById,
    getMostRecentActivity,
}