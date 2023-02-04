const formulario = document.getElementById("formRegister");
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const usuario = document.getElementById("userName");
const contraseña  = document.getElementById("pas");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}



const registroUsuario = (e) => {
  e.preventDefault();
  let validarUser = JSON.parse(localStorage.getItem("user")) || [];
  let usuarioRegistro = JSON.parse(localStorage.getItem("user")) || [];
  let user = {
    nombres: nombre.value,
    correos: correo.value,
    usuarios: usuario.value,
    contraseñas: contraseña.value,
  }
if (nombre.value === "" || correo.value === "" || usuario.value === "" || contraseña.value === "" ) {
      alert('Hay campos vacios') 

}else if (expresiones.nombre.test(user.nombres)  == false ||
     expresiones.correo.test(user.correos)       == false ||
     expresiones.usuario.test(user.usuarios)     == false ||
     expresiones.password.test(user.contraseñas) == false ) {
  alert('El campo no es valido') 

}else if (validarUser.find(user => user.nombres === nombre.value)) {
  alert('El usuario ya existe')

}else {
  
  usuarioRegistro.push(user);  
  localStorage.setItem("user", JSON.stringify(usuarioRegistro));  
  alert("usuario registrado con exito")
  window.location.href="/indexLogin.html"
}

} 

  
  



 formulario.addEventListener("submit", registroUsuario)

// const registroUsuario = () => {

//   let usuarioRegistro = [];
//   let user = {
//     nombres: nombre.value,
//     correos: correo.value,
//     usuarios: usuario.value,
//     contraseñas: contraseña.value,
//   }
  
//   if (usuarioRegistro.find( register => register.nombres === nombre.value)) {
//     alert("ya existe el usuario")
//   }else{
//     usuarioRegistro.push(user);
//     localStorage.setItem("register", JSON.stringify(usuarioRegistro))
//     alert("usuario registrado con exito")
    
//     nombre.value = "";
//     correo.value = "";
//     usuario.value = "";
//     contraseña.value = "";
//     window.location.href="/indexLogin.html";
//   }
// }

// formulario.addEventListener("submit", registroUsuario)

// if (nombre.value === "" || correo.value === "" || usuario.value === "" || contraseña.value === "" ) {
//   alert('Hay campos vacios')