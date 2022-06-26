const express = require('express')

const NewsCtrl = require('../controllers/news-ctrl')

const router = express.Router()

router.post('/article', NewsCtrl.createArticle)
router.put('/article/:id', NewsCtrl.updateArticle)
router.delete('/article/:id', NewsCtrl.deleteArticle)
router.get('/article/:id', NewsCtrl.getArticleById)
router.get('/news', NewsCtrl.getNews)
router.get('/news/recent', NewsCtrl.getMostRecentArticle)
router.post('/uploadArticleImage', NewsCtrl.uploadArticleImage)

module.exports = router