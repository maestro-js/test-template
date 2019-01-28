var express = require('express')
var router = express.Router()
var github = require('../api/github')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.use('/github', github)

module.exports = router
