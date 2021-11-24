const express = require('express')
const sendEmail = require('../controllers/mailController')
const router = express.Router()

router.route("/").get(sendEmail)

module.exports = router