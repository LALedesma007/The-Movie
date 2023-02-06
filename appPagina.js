
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
      `<div class="carruselItem">
       <button type="button"  onclick="cardsMovies(${info.id})" class="btn cardMovies" ><img class="imagenesCard" src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt=""  data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>
     </div>`);
    cards.innerHTML = card
  }
  createCardCarrusel()

//----------------------------------------------------//

const cardsMovies = async (id) => {
    
  const cardMovie = document.getElementById("containerVideo")
      const videos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=50db356830835cf004f77701bdcff3e5&language=en-US`)
      .then(Response => Response.json())
      .then(json =>json.results) 
      let movieCard = videos[0];
  cardMovie.innerHTML =    
  `  <div class="modal fade" id="staticBackdrop"  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" id="botonCerrar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
               <iframe id="myVideo" width="500" height="300" src="https://www.youtube.com/embed/${movieCard.key}" ></iframe>
            </div>
        </div>
     </div>`
 const vmodal = document.getElementById("botonCerrar")
 const video = document.getElementById("myVideo")

  vmodal.addEventListener('click', () => {      
  video.remove();
 })
} 


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
    `<div class="card m-2 col-12 p-0 border-0" >
          <img src="https://image.tmdb.org/t/p/original/${info.poster_path}" class=" imagen rounded-top" alt="The Movie">
      
    </div>
  `);
  cards.innerHTML = popular
  }
 crearCard() 
}  
  
form.addEventListener("submit", buscar) 

// --------- CERRAR SECCION  ------------//
if (!localStorage.getItem("userlog")) {
  window.location="./indexLogin.html"
}

const cerrarSeccion = document.getElementById("cerrar")

const salirSeccion = () =>{
  localStorage.removeItem("userlog")
  window.location = "./indexLogin.html"
}

cerrarSeccion.addEventListener("click", salirSeccion)