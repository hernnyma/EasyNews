// routes/api/articles.js

const express = require('express');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles');

// POST /api/articles
router.get('/', articlesCtrl.getAll);
router.post('/save', articlesCtrl.saveArticle)
router.get('/user', articlesCtrl.getUserArticles)
router.post('/updateNote', articlesCtrl.updateNote)
router.post('/:id', articlesCtrl.deleteArticle)

module.exports = router;