// Funciones para encriptar un mensaje

var msjUsuario        = document.getElementById("frase-usuario");
var msjUsuarioRespaldo
var textEncriptado    = document.getElementById('frase-en');
var textDesencriptado = document.getElementById('frase-des');
var btnEncriptar      = document.getElementById('btn-en');
var btnDesencriptar   = document.getElementById('btn-des');

function encriptar(){
  msjUsuarioRespaldo = msjUsuario.value;
  let usuarioValor = msjUsuario.value;
  let frase = [];
  
  for (i = 0; i < usuarioValor.length; i++) {
    frase.push(usuarioValor.charAt(i))
    // console.log(i);
    // console.log(frase);
  }
  // console.log(nuevaFrase.join(''));
  let msjEncriptado = frase.sort().join('');
  console.log(msjEncriptado);
  textEncriptado.value = msjEncriptado;
  msjUsuario.value = "";
  textDesencriptado.value = "";
}
function desencriptar(){
  textDesencriptado.value = msjUsuarioRespaldo;
  textEncriptado.value = "";
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);



