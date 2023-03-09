/* Obtenenos los datos de los parametros de la URL */
let parametros = new URLSearchParams(document.location.search)
let id = parametros.get("id")
console.log(parametros);
console.log(id);


/* Buscar dato por id */
let evento = data.events.find(evento => evento._id == id);
 console.log(evento);
/* Renderizar evento */
// const container = document.getElementsByClassName("imprimir");
// console.log(container);

let templateHtml = "";

templateHtml = `<section class="card col-10"> 
    
                    <div class="col-5 "  >
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

document.querySelector(".imprimir").innerHTML= templateHtml;

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

