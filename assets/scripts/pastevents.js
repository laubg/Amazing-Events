const contenedorCards= document.querySelector('.cards')
console.log(data.currentDate);

let newCards = crearCards(data.events)

contenedorCards.innerHTML = newCards


function crearCards(arrayDatos){
    let tarjetas =""

    for (const tarjeta of arrayDatos) {  
        
        if (tarjeta.date<data.currentDate) {
            tarjetas += `<div class="card col-sm-6 col-md-4 " >        
                    <img src= ${tarjeta.image}  class="card-img-top" alt="cinema">    
                    <div class="card-body">  
                        <h5 class="card-title">${tarjeta.name}</h5>
                        <p class="card-text">${tarjeta.description}</p>                         
                        <div class="row card-row">                               
                            <div class="precio col-md-6 col-sm-12"> <h6>   $${tarjeta.price}</h6></div>                                
                            <div class="botón col-md-6 col-sm-12"><a href="details.html" class="btn btn-primary">Details</a></div>                        
                        </div>                   
                    </div>                    
                </div>               `   } 
            
       
    
    
                return tarjetas }
}
// ``