const eyes = document.querySelector(".iconEyes")
const password = document.getElementById("pas")
const icon = document.querySelector("i");
  
const iconEye = () => {
if (password.type === "password") {
  password.type = "text"
  icon.classList.remove("fa-eye-slash");
  icon.classList.add("fa-eye");
}else{
  password.type = "password"
  icon.classList.add("fa-eye-slash");
  icon.classList.remove("fa-eye");
}
} 

//eventos
eyes.addEventListener("click", iconEye)
