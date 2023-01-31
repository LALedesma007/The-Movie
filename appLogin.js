
const formulario = document.getElementById("formRegister");
const usuario = document.getElementById("userName");
const contraseña  = document.getElementById("pas");

const loginUsuario = (e) => {
  e.preventDefault();

  const getLocal = localStorage.getItem("user");
  const validarUser = JSON.parse(getLocal);
console.log(validarUser);
  if (!validarUser.find(user => user.usuarios === usuario.value)) {
      alert("El usuario no existe")
    }else if (validarUser.find(user => user.usuarios === usuario.value).contraseñas !== contraseña.value) {
      alert("La contraseña no coincide")
    }else{
      alert("Usuario logueado con exito")
      window.location.href="/indexPagina.html";
    }
  }
    

// Eventos
formulario.addEventListener("submit", loginUsuario)