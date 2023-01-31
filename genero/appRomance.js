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
    .then(json =>json.results)
  )
} 

  const CreateCard = async() => {
  const cards = document.getElementById("containerCard")
  const data = await getData()
  const inf = data.filter(info => info.genre_ids[0] === 10749 )
  const romance = inf.map(info =>     `<div class="card m-2 col-sm-12  col-lg-2 p-0 border-0" >
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
`)

  console.log(inf);
  cards.innerHTML = romance
}

CreateCard() 
