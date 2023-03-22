// APIS------------------------------------------------------------------------------
let urlApi= "../assets/scripts/data.json"
// let urlApi= "https://mindhub-xj03.onrender.com/api/amazing"

//Chequear funcionamiento fetch---------------------------------------------
// console.log(fetch("https://mindhub-xj03.onrender.com/api/amazing"))


/* Obtenenos los datos de los parametros de la URL */
let parametros = new URLSearchParams(document.location.search)
let id = parametros.get("id")
let evento = {}
console.log(parametros);
console.log(id);

function traerDatos() {
    fetch(urlApi)
    .then(response => response.json())
    .then(datosApiEventos => {
        // throw new Error("ocurrió un error al traer los datos");
        console.log(datosApiEventos);
        eventos = datosApiEventos.events
        let evento = eventos.find(evento => evento._id == id);

        console.log(eventos)
        // filtrarEventos(eventos) 
        // console.log(crearTarjetas(eventos));
        crearCardDetail(evento)
        // console.log(crearTarjetas(eventos));
    })
    .catch(error =>{
        console.log(error);
    })  
}

traerDatos()
/* Buscar dato por id */

function filtrarEventos(eventos){
let evento = eventos.find(evento => evento._id == id);
 console.log(evento);
/* Renderizar evento */
// const container = document.getElementsByClassName("imprimir");
// console.log(container);
}

function crearCardDetail(evento){
let templateHtml = "";

templateHtml = `<section class="card col-10"> 
    
                    <div class="col-5 row justify-content-center"  >
                       <img src="${evento.image}" class="img-fluid">
                    </div> 
                    <div class="card-body col-4 ">
                        <h1 class="card-title">${evento.name}</h1>
                        <p class="card-text">${evento.description}</p>  
                        <div class="row card-row">
                            <div class="datos col-md-6 col-sm-12"> <h5>Date: ${evento.date}</h5></div>
                            <div class="derecha col-md-6 col-sm-12"><h5>Location: ${evento.place}</h5></div>
                        </div> 
                        <div class="row card-row">
                            <div class="datos col-md-6 col-sm-12"> <h5>Capacity: ${evento.capacity}</h5></div>
                            <div class="derecha col-md-6 col-sm-12"><h5>${evento.estimate == undefined ? ("Assistance: "+ evento.assistance) : ("Estimate: "+ evento.estimate) }</h5></div>
                        </div>
                        <div class="row card-row">
                            <div class="datos2 col-md-6 col-sm-12"> <h6>Price: $${evento.price}</h6></div>
                        </div>
                        <div class="botón col-md-12 col-sm-12"><a href="#" class="btn-buy btn btn-primary">Buy</a></div>
                        </div>
                    </div>
                </section>  
    `
console.log(templateHtml);

return document.querySelector(".imprimir").innerHTML= templateHtml;
}
// OTRA FORMA--------------------------------------------------
//     function mostrarEvento(container,evento){
//         container.innerHTML=`   <div class="card col-9 " style="background-color: "black"" >
//         <img src="${evento.img}">
//     <div class="card-body">
//         <h1 class="card-title">${evento.name}</h1>
//         <p class="card-text">${evento.description}</p>  
//         <div class="row card-row">
//             <div class="datos col-md-6 col-sm-12"> <h5>Date: ${evento.date}</h5></div>
//             <div class="derecha col-md-6 col-sm-12"><h5>Location: ${evento.place}</h5></div>
//         </div> 
//         <div class="row card-row">
//             <div class="datos col-md-6 col-sm-12"> <h5>Capacity: ${evento.capacity}</h5></div>
//             <div class="derecha col-md-6 col-sm-12"><h5>Assistance:${evento.assistance}</h5></div>
//         </div>
//         <div class="row card-row">
//             <div class="datos col-md-6 col-sm-12"> <h5>$${evento.price}</h5></div>
            
//         </div>
//         <div class="botón col-md-12 col-sm-12"><a href="#" class="btn-buy btn btn-primary">Buy</a></div>
//     </div>
// </div>
// `
//     }
// let contenedor= document.querySelector(".imprimir")
// mostrarEvento(contenedor,evento)

