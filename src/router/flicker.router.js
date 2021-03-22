const express = require('express')
const { controller } = require('../controllers')
const router = express.Router()
router.get('/',controller.helloWorld)
router.post('/flicker/feed',controller.getFeed)
module.exports = router