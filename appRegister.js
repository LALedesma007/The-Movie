const formulario = document.getElementById("formRegister");
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const usuario = document.getElementById("userName");
const contraseña  = document.getElementById("pas");

let usuarioRegistro = [];

//Funcion
const registroUsuario = (e) => {
 e.preventDefault();
 
  let user = {
    nombres: nombre.value,
    correos: correo.value,
    usuarios: usuario.value,
    contraseñas: contraseña.value,
  }
  
  if (usuarioRegistro.find( user => user.nombres === nombre.value)) {
    alert("ya existe el usuario")
  }else{
    usuarioRegistro.push(user);
    localStorage.setItem("user", JSON.stringify(usuarioRegistro))
    alert("usuario registrado con exito")
    
    nombre.value = "";
    correo.value = "";
    usuario.value = "";
    contraseña.value = "";
    window.location.href="/indexLogin.html";
  }
}

// Eventos
formulario.addEventListener("submit", registroUsuario)