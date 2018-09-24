// seleccion del formulario
var formulario = document.getElementById("contact-form");
window.onload = iniciar;

//queda a la escucha del evento click
function iniciar(){
  document.getElementById('enviar').addEventListener('click',validar, false)
}
//valida el campo nombre
function validaNombre(){
  var elemento = document.getElementById('name')
  if(elemento.value == ""){
    alert("el campo Nombre no puede ser vacio")
    error(elemento)
    return false
  }
  return true;
}

// valida el Email
function validaMail(){
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}




function validar(e){
  if(validaNombre() && validaMail() && confirm("Deseas enviar el formulario")){
  return true
}else{
    e.preventDefault()
    return false
  }
}
