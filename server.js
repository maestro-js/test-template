require('dotenv').config()
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const api = require('./api/routes')


app.prepare()
  .then(() => {
    const server = express()

    // Takes the raw requests and turns them into usable properties on req.body
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use('/api', api)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })