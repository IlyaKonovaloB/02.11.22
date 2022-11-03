const express = require('express'),
        router = express.Router(),
        app = express();


const host = '127.0.0.1'
const port = 7000

app.get('/', (req, res) => {
  res.type('text/plain')
  return res.send('Any data')
})

app.get('/', (req, res) => {
  res.end()
  return res.redirect(301, './login'), res.json({ message: 'ok' })
})

app.get('/', (req, res) => {
  console.log(res.headersSent) 
  res.status(200).send({ message: 'ok' })
  console.log(res.headersSent) 
  return
})

app.get('/download', (req, res) => {
  return res.status(200).download('img/ert.png')
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
