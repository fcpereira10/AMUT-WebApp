const express = require('express')

const ArticleCtrl = require('../controllers/news-ctrl')

const router = express.Router()

router.post('/article', ArticleCtrl.createArticle)
router.put('/article/:id', ArticleCtrl.updateArticle)
router.delete('/article/:id', ArticleCtrl.deleteArticle)
router.get('/article/:id', ArticleCtrl.getArticleById)
router.get('/news', ArticleCtrl.getNews)
router.get('/news/recent', ArticleCtrl.getMostRecentArticle)

module.exports = router