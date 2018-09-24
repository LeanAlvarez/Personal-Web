const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
  res.render('index', {
    title: 'Lean Alvarez - Desarrollo Web'
  })
})

router.get('/portfolio', (req, res) =>{
  res.render('portfolio',{
    title: 'Lean Alvarez - Portfolio'
  })
})

router.get('/cv', (req, res) =>{
  res.render('cv',{
    title: 'Lean Alvarez - Cv'
  })
})

router.get('/contacto', (req, res) =>{
  res.render('contacto',{
    title: 'Lean Alvarez - Contacto'
  })
})




// exporta las rutas
module.exports = router;
