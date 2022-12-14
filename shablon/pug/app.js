const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
