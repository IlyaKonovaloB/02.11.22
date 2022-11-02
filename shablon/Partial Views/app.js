const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

const host = '127.0.0.1'
const port = 7000

app.engine(
  'handlebars',
  handlebars.engine({
    defaultLayout: 'main',
    helpers: {
      getTitle: () => 'Greetings form Handlebars',
    },
  })
)
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home', {
    helpers: {
      getAdvantages: () => [
        'simple',
        'flexible',
        'powerful',
      ],
    },
  })
})


app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
