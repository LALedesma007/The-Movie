const getfavoritos = () =>{
  const miFavoritos = JSON.parse(localStorage.getItem("miFav"))
  const contCardFav = document.getElementById("containerCardFavorito")

  const card = miFavoritos.map(info =>
    `<div class="card m-2 col-sm-12  col-lg-2 p-0 border-0" >
         <img src="https://image.tmdb.org/t/p/w500/${info.poster_path}" class=" imagen rounded-top" alt="The Movie">
      <div class="card border-0">
         <div class="card cardBtn border-0">
           <a href="#" class="btn btn-primary textoNav" onclick="informacion(${info.id})" id="info">Más Info</a>
           <a href="./indexFavorito.html" class="btn btn-primary mt-2 textoNav" onclick="eliminarFav(${info.id})">Eliminar mi Favorito<img src="./imagenes/favoritoDos.png" width="40px" alt=""></a>
         </div>
      </div>
   </div>
 `);
 
 contCardFav.innerHTML = card
}

getfavoritos()

const eliminarFav = (infoID) => {
  let existenFav = JSON.parse(localStorage.getItem("miFav")) || []
  const itemABorrar = existenFav.some(({ id }) => id == infoID)
  if(itemABorrar){
    const arrayitemABorrar = existenFav.filter(({ id }) => id != infoID)
    localStorage.setItem("miFav", JSON.stringify(arrayitemABorrar))
    window.Location.href="./indexFavorito.html";
  }

}


 
