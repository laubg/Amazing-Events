/* Obtenenos los datos de los parametros de la URL */
let params = new URLSearchParams(document.location.search)
let id = params.get("id")
console.log(params);
console.log(id);


/* Buscar dato por id */
let evento = data.events.find(evento => evento._id == id);
 console.log(evento);
/* Renderizar evento */
// const container = document.getElementsByClassName("imprimir");
// console.log(container);

let templateHtml = "";

templateHtml = `   <div class="card col-9 " style="background-color: "black"" >
                <img src="${evento.img}">
            <div class="card-body">
                <h1 class="card-title">${evento.name}</h1>
                <p class="card-text">${evento.description}</p>  
                <div class="row card-row">
                    <div class="datos col-md-6 col-sm-12"> <h5>Date: ${evento.date}</h5></div>
                    <div class="derecha col-md-6 col-sm-12"><h5>Location: ${evento.place}</h5></div>
                </div> 
                <div class="row card-row">
                    <div class="datos col-md-6 col-sm-12"> <h5>Capacity: ${evento.capacity}</h5></div>
                    <div class="derecha col-md-6 col-sm-12"><h5>Assistance:${evento.assistance}</h5></div>
                </div>
                <div class="row card-row">
                    <div class="datos col-md-6 col-sm-12"> <h5>$${evento.price}</h5></div>
                    
                </div>
                <div class="botón col-md-12 col-sm-12"><a href="#" class="btn-buy btn btn-primary">Buy</a></div>
            </div>
        </div>
    `
console.log(templateHtml);

    document.getElementsByClassName("búsqueda").innerHTML= templateHtml;

