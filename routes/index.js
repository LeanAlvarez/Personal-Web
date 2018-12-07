const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
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

router.get('/exito', (req, res) =>{
  res.render('exito',{
    title: 'Lean Alvarez - Gracias!'
  })
})

router.get('/fail', (req, res) =>{
  res.render('fail',{
    title: 'Lean Alvarez - Opss!'
  })
})


router.post('/contacto/enviar', (req, res,next) => {
  console.log(req.body)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user: process.env.MAIL_U,
      pass: process.env.MAIL_P
    }  
  })
  let mailOptions = {
    from: 'Nombre: '+ req.body.nombre+ ' Mail: '+ req.body.mail,
    to: process.env.MAIL_U,
    subject: 'Formulario de contacto',
    text: 'Se ha enviado un mensaje desde el formulario de contacto, Nombre: '+ req.body.nombre+' email:'+ req.body.email+' Mensaje: '+req.body.mensaje,
    html: '<p>Se ha enviado un mensaje desde el formulario de contacto</p><ul><li>Nombre: '+req.body.nombre+'</li><li>Email: '+ req.body.email+'</li><li>Mensaje:'+req.body.mensaje+'</li></ul>'
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      res.redirect('/fail')
      console.log(err)
    } else{
      res.redirect('/exito')
      console.log('Mensaje Enviado'+info)
    }
    

    
  })

})



// exporta las rutas
module.exports = router;
