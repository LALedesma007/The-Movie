
const formulario = document.getElementById("formRegister");
const usuario = document.getElementById("userName");
const contraseña  = document.getElementById("pas");

const loginUsuario = (e) => {
  e.preventDefault();

  const getLocal = localStorage.getItem("user");
  const validarUser = JSON.parse(getLocal);

if (validarUser === null) {
      alert("No hay usuarios registrados")
}else if (usuario.value === "" || contraseña.value === "" ) {
  alert('Hay campos vacios') 
}else if (!validarUser.find(user => user.usuarios === usuario.value)) {
      alert("El usuario no existe")
}else if (validarUser.find(user => user.usuarios === usuario.value).contraseñas !== contraseña.value) {
      alert("La contraseña no coincide")
}else{
      localStorage.setItem("userlog", JSON.stringify("user"))
      alert("Usuario logueado con exito")
      window.location.href="/indexPagina.html";
    }
}
    

formulario.addEventListener("submit", loginUsuario)