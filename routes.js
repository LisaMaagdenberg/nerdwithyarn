const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {res.render('index')})
router.get('/error', (req, res) => {res.render('index')})
router.get('/admin', (req, res) => {res.render('index')})
router.get('/blog', (req, res) => {res.render('index')})
router.get('/shop', (req, res) => {res.render('index')})
router.get('/about', (req, res) => {res.render('index')})
router.get('/freepatterns', (req, res) => {res.render('index')})

module.exports = router;
