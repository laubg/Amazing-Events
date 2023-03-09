const contenedorTarjetas= document.querySelector('.cards')
// / console.log(data.currentDate);/

const evento= data.events;




// Buscador----------------------------------------------------------------------
let buscador= document.querySelector(".form-control")
// console.log(buscador);

let formulario= document.querySelector(".formb")



console.log(formulario);


// function filtrarEventos(arrayEventos){
    buscador.addEventListener("change", ()=>{ 
        let eventosFiltrados = evento.filter((evento) => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
        console.log(buscador.value);
        console.log(eventosFiltrados);

        crearTarjetas(eventosFiltrados);
        console.log(crearTarjetas(eventosFiltrados));
        contenedorTarjetas.innerHTML = crearTarjetas(eventosFiltrados);


    })


     formulario.addEventListener("submit", (event)=>{event.preventDefault()})


// Creación de Cards---------------------
let nuevasTarjetas = crearTarjetas(evento)

contenedorTarjetas.innerHTML = nuevasTarjetas



function crearTarjetas(arrayEventos){
    let tarjetas =""
    let fechaactual= data.currentDate


    arrayEventos.forEach(evento => {  
        
        if (evento.date<fechaactual) {
            tarjetas += `<div class="card col-sm-6 col-md-4 " >        
                    <img src= ${evento.image}  class="card-img-top" alt="cinema">    
                    <div class="card-body">  
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>                         
                        <div class="row card-row">                               
                            <div class="precio col-md-6 col-sm-12"> <h6>   $${evento.price}</h6></div>                                
                            <div class="botón col-md-6 col-sm-12"><a href="/details.html?id=${evento._id}" class="btn btn-primary">Details</a></div>                        
                        </div>                   
                    </div>                    
                </div>               `   }   
    });
    
    return tarjetas
    
}