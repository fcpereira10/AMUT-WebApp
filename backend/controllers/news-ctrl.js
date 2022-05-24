const Article = require('../models/news-model')

createArticle = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Article',
        })
    }

    const article = new Article(body)

    if (!article) {
        return res.status(400).json({ success: false, error: err })
    }

    article
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: article._id,
                message: 'Article created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Article not created!',
            })
        })
}

updateArticle = async (req, res) => {
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
                message: 'Article not found!',
            })
        }
        activity.title = body.title
        activity.description = body.description
        activity.date = body.date
        activity
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: activity._id,
                    message: 'Article updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Article not updated!',
                })
            })
    })
}

deleteArticle = async (req, res) => {
    await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }

        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticleById = async (req, res) => {
    await Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}
getMostRecentArticle = async (req, res) => {
    await Article.find({}, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!news.length) {
            return res
                .status(404)
                .json({ success: false, error: `Activity not found` })
        }
        return res.status(200).json({ success: true, data: news[0] })
    }).catch(err => console.log(err))
}

getNews = async (req, res) => {
    await Article.find({}, (err, articles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!articles.length) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: articles })
    }).catch(err => console.log(err))
}



module.exports = {
    createArticle,
    updateArticle,
    deleteArticle,
    getNews,
    getArticleById,
    getMostRecentArticle,
}