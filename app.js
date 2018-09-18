const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// imports
const routes = require('./routes/index') //importa las rutas

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use((req, res, next) => {
  console.log(`${req.url} - ${req.method}`)
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// routes
app.use(routes) //usa las rutas



// static files

app.use(express.static(path.join(__dirname, 'public')))


//start Server
app.listen(app.get('port'), () =>{
  console.log(`servidor funcionando en puerto:`, app.get('port'))
})
