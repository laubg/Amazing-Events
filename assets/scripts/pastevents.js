const contenedorCards= document.querySelector('.cards')
// / console.log(data.currentDate);/

let newCards = crearCards(data.events)

contenedorCards.innerHTML = newCards

// console.log(fechaactual);

function crearCards(arrayEventos){
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
                            <div class="botón col-md-6 col-sm-12"><a href="details.html" class="btn btn-primary">Details</a></div>                        
                        </div>                   
                    </div>                    
                </div>               `   }   
    });
    
    return tarjetas
         
}
// ``