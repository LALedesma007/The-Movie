// --------CONTROL DE MOVIMIENTO DEL CARRUSEL---------//

const carrusel = document.querySelector(".carruselItems")
 
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth // Esta resta da el scroll maximo que llega
let intervalo = null
let step = 1 // El numero del Step Controla la velocidad del carrusel  

const start = () => {
intervalo = setInterval(function(){
carrusel.scrollLeft += step
if (carrusel.scrollLeft === maxScrollLeft) {
  step = -1 // cuando el maxScrollLeft llega al final el step se vuelve negativo y el carrusel regresa
}else if (carrusel.scrollLeft === 0) {
  step = 1
}
},10);
}


const stop = () =>{
clearInterval(intervalo)
}

carrusel.addEventListener('mouseover', stop)
carrusel.addEventListener("mouseout", start)
start();

// --------CARRUSEL---------//

const getDataCarrusel = async () => {
  return(
      await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=50db356830835cf004f77701bdcff3e5&language=es-ES&page=1`)
      .then(Response => Response.json())
      .then(json => json.results)
    )
  } 
    const createCardCarrusel = async() => {
    const cards = document.getElementById("carrusel")
    const data = await getDataCarrusel()
    const card = data.map(info =>
      ` <div class="carruselItem">
      <img src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt="">
    </div>
   `);
   
    cards.innerHTML = card
  }
  
  createCardCarrusel() 



// --------- BUSQUEDA DE LAS PELICULAS  ------------//

const form = document.getElementById("formulario")
const search = document.getElementById("busqueda")

const buscar = (e) => {
  
  e.preventDefault();
  const mostrar = search.value
  const databuscar = async () => {
    return (
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=50db356830835cf004f77701bdcff3e5&query=${mostrar}&language=en-US&page=1&include_adult=false`)
        .then(Response => Response.json())
        .then(json => json.results)
    )
  }

  const crearCard = async() => {
    const cards = document.getElementById("containerCard")
    const data = await databuscar()
  
    const popular = data.map(info => 
    `<div class="card m-2 col-sm-12  col-lg-2 p-0 border-0" >
          <img src="https://image.tmdb.org/t/p/original/${info.poster_path}" class=" imagen rounded-top" alt="The Movie">
       <div class="card border-0 mt-1">
          <div class="card cardTxt border-0 m-1">
            <h6 class="fw-bold">${info.title}</h6>
          </div>
          <div class="card cardBtn border-0">
            <a href="#" class="btn btn-warning textoInfo" id="info">Hola</a>
          </div>
       </div>
    </div>
  `);
  cards.innerHTML = popular
  }
 crearCard() 
}  
  
form.addEventListener("submit", buscar) 

//---------GENERO-----------//

const getDataGenero = async() =>{
  return(
   await fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=50db356830835cf004f77701bdcff3e5&language=en-US`)
    .then(Response => Response.json())
    .then(json =>console.log(json.genres))
  )  
}
getDataGenero()