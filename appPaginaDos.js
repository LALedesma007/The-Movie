// --------- DEFINE LAS PAGINAS DE LAS PELICULAS POPULARES ------------//

let pagina = 1
const anterior = document.getElementById("btnAnterior");
const siguiente = document.getElementById("btnSiguiente");

const paginaSiguiente = () => {
  if (pagina < 1000) {
    pagina += 1;
    CreateCard();
  }
}

const paginaAnterior = () => {
  if (pagina > 1) {
    pagina -= 1;
    CreateCard();
  }
}
siguiente.addEventListener(`click`, paginaSiguiente)
anterior.addEventListener(`click`, paginaAnterior)

// --------- CREAR LAS CARD DE LAS PELICULAS POPULARES ------------//
  
const getData = async () => {
return(
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=50db356830835cf004f77701bdcff3e5&language=es-ES&page=${pagina}`)
    .then(Response => Response.json())
    .then(json => json.results)
  )
} 

  const CreateCard = async() => {
    const cards = document.getElementById("containerCard")
  const data = await getData()
  localStorage.setItem("dataApi", JSON.stringify(data))
  const card = data.map(info =>
    `<div class="card  m-2 col-sm-12  col-lg-2 p-0 border-0" >
         <img src="https://image.tmdb.org/t/p/w500/${info.poster_path}" class=" imagen rounded-top" alt="The Movie">
      <div class="card  border-0">
         <div class="card  border-0">
           <a href="#" class="btn btn-primary textoInfo" onclick="informacion(${info.id})" id="info">Más Info</a>
           <a href="#" class="btn btn-primary mt-2 textoInfo" onclick="addFav(${info.id})">Agregar a Favorito<img src="./imagenes/favorito.png" width="40px" alt=""></a>
         </div>
      </div>
   </div>
 `);
  cards.innerHTML = card
}

CreateCard()  
// --------- CREAR CARD FAVORITAS ------------//

const addFav = (id) => {
  const data = JSON.parse(localStorage.getItem("dataApi"))
  let exiteFavorito = JSON.parse(localStorage.getItem("miFav")) || []


  let fav = data.find(info => info.id == id)
  exiteFavorito.push(fav)
  localStorage.setItem("miFav", JSON.stringify(exiteFavorito))
 
}



// --------- Obtenga las reseñas de los usuarios para una película. ------------//


const informacion = async (id) =>{
    const cards = document.getElementById("containerCard")
    const data = await getData()
    console.log(data);
    const inf = data.find(info => (info.id == id))
    console.log(inf);    
              
      cards.innerHTML = `<div class="container-fluid">
      <div class="row justify-content-center mt-3">
        <div class="card contenedorCard mb-3" >
          <div class="row">
          <img class="fondo " src="https://image.tmdb.org/t/p/w500/${inf.backdrop_path}" alt="">
            <div class="col-md-4">
              <img src="https://image.tmdb.org/t/p/w500/${inf.poster_path}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title texto mx-5 mt-3 fw-bold">${inf.title}</h1>
                <div class="d-flex mt-5">
                  <div class="col-md-8 ms-5">
                    <h3 class="card-title texto ">Puntuación de usuario</h3>
                  </div>
                  <div class="col-md-4">
                      <h3 class="card-title puntuacion">${inf.vote_average}</h3>
                  </div>
                </div>
                <h5 class="mx-5 mt-3 texto ">Fecha de lanzamiento: ${inf.release_date}</h5>
                <h4 class="card-title texto  mx-5 mt-3">Vista General</h4>
                <p class="card-text texto mx-5">${inf.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
` 

}


