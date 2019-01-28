var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

const url = 'https://api.github.com'

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/user/:login', 
  async function (req, res) {
    const { login } = req.params
    console.log(`${Date.now()} fetching github user for ${login}`)
    res.json(await (await fetch(`${url}/users/${login}`)).json())
  })


module.exports = router
