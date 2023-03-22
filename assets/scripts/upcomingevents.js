// Contenedor tarjetas--------------------------------------------------------------------------------
const contenedorTarjetas= document.querySelector('.cards')
// Contenedor Buscador--------------------------------------------------------------------------------
let buscador= document.querySelector(".form-control")
// console.log(buscador);
// Contenedor Checkboxes------------------------------------------------------------------------------
let categorias = document.querySelectorAll('input[type=checkbox]')
console.log(categorias);
// Contenedor Formulario------------------------------------------------------------------------------
let formulario= document.querySelector(".formb")
console.log(formulario);

// APIS------------------------------------------------------------------------------
let urlApi= "../assets/scripts/data.json"
// let urlApi= "https://mindhub-xj03.onrender.com/api/amazing"

//Chequear funcionamiento fetch---------------------------------------------
// console.log(fetch("https://mindhub-xj03.onrender.com/api/amazing"))

// VARIABLES------------------------------------------------------------------------------
let eventos= [];
let eventosBuscados=[]
let eventosSeleccionados = []



function traerDatos() {
    fetch(urlApi)
    .then(response => response.json())
    .then(datosApiEventos => {
        // throw new Error("ocurrió un error al traer los datos");
        console.log(datosApiEventos);
        eventos = datosApiEventos.events
        let fechaActual= datosApiEventos.currentDate
        console.log(fechaActual)
        crearTarjetas(eventos,fechaActual) 
        // console.log(crearTarjetas(eventos,fechaActual));
        filtrarEventos(eventos,eventosSeleccionados,fechaActual)
        seleccionarCategorias(categorias,eventosBuscados,fechaActual)
        // console.log(crearTarjetas(eventos));
    })
    .catch(error =>{
        console.log(error);
    })  
}

traerDatos()




// Creación de tarjetas----------------------------------------------------------------            

   
function crearTarjetas(arrayEventos,fechaActual){

    let tarjetas =""

    arrayEventos.forEach(evento => {
        
        if (evento.date>fechaActual) {
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
                
                else{
                    contenedorTarjetas.innerHTML = `<h4 class="d-flex flex-row justify-content-center alig-items-center">No existen eventos relacionados a su búsqueda</h4> <img src="./assets/img/a27d24_9c9a8ce8401f4dc1b33acc16118f2e10_mv2.gif" style="width:260px;"></img>`
                    return 
                }
            }) ;
    
    return contenedorTarjetas.innerHTML = tarjetas



    
}    

function filtrarEventos(eventos,eventosSeleccionados,fechaActual){
    buscador.addEventListener("keyup", ()=>{
    
        console.log(eventosSeleccionados.length)
    if (eventosSeleccionados.length>0) {
        eventosBuscados = eventosSeleccionados.filter((evento) => evento.name.toLowerCase().includes(buscador.value.toLowerCase()) )
        console.log(eventosSeleccionados.length)
        console.log("funciona con eventos seleccionados en checks");
        console.log(eventosBuscados);
        

    } else {
        eventosBuscados = eventos.filter((evento) => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
        console.log(eventosBuscados.length)
        console.log(eventosBuscados);
    }
   
        // console.log(buscador.value);
        // conseventos);
        if(eventosBuscados.length == 0){
            contenedorTarjetas.innerHTML = `<h4 class="d-flex flex-row justify-content-center alig-items-center">No existen eventos relacionados a su búsqueda</h4> <img src="./assets/img/a27d24_9c9a8ce8401f4dc1b33acc16118f2e10_mv2.gif" style="width:260px;"></img>`
            return
        }
        if (eventosBuscados.length==0) {
            contenedorTarjetas.innerHTML = crearTarjetas(eventos,fechaActual)
            return eventos  
            }else{
                crearTarjetas(eventosBuscados,fechaActual);
                console.log(crearTarjetas(eventosBuscados));
                contenedorTarjetas.innerHTML = crearTarjetas(eventosBuscados,fechaActual);
                // varIntermediaria=varIntermediaria.push(eventosBuscados)
                console.log(eventosBuscados)
                console.log(eventosBuscados.length);
                // console.log(varIntermediaria)
                // filtrar(varIntermediaria)
                seleccionarCategorias(categorias,eventosBuscados,fechaActual)
                return eventosBuscados
            }
    })

     formulario.addEventListener("submit", (event)=>{event.preventDefault()})
}


function seleccionarCategorias(categorias,eventosBuscados,fechaActual) {
    for (let categoria of categorias ) {
        categoria.addEventListener( "click", (event) =>{
            // console.log(fechaActual);
            // console.log(eventosBuscados)
            if(event.target.checked & eventosBuscados.length>0){
               
                console.log("entré");              
                eventosSeleccionados=eventosBuscados.filter(evento=>evento.category==event.target.value)
                console.log(eventosSeleccionados)
                console.log(fechaActual);
                contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados,fechaActual);
                console.log(crearTarjetas(eventosSeleccionados,fechaActual))
                if(eventosSeleccionados.length == 0){
                    console.log("entré al condicional búsqueda sin resultados"); 
                    contenedorTarjetas.innerHTML = `<h4 class="d-flex flex-row justify-content-center alig-items-center">No existen eventos relacionados a su búsqueda</h4> <img src="./assets/img/a27d24_9c9a8ce8401f4dc1b33acc16118f2e10_mv2.gif" style="width:260px;"></img>`
                    return
                }   else{
                    contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados,fechaActual);
                }
                
            } 
                else if(event.target.checked & eventosBuscados.length==0){
                    eventos.forEach(evento=>evento.category==event.target.value?(eventosSeleccionados.push(evento)):(console.log("usa eventos")))  
                    console.log(eventosSeleccionados);    
                    console.log("entré al condicional búsqueda con resultados");
                    console.log(eventosSeleccionados);
                    console.log(fechaActual);
                    contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados,fechaActual);
                    console.log(contenedorTarjetas.innerHTML);
                    if(eventosSeleccionados.length == 0){
                        console.log("entré al condicional búsqueda sin resultados"); 
                        contenedorTarjetas.innerHTML = `<h4 class="d-flex flex-row justify-content-center alig-items-center">No existen eventos relacionados a su búsqueda</h4> <img src="./assets/img/a27d24_9c9a8ce8401f4dc1b33acc16118f2e10_mv2.gif" style="width:260px;"></img>`
                        return
                    }
                        
                
                        
                
            
                }else{
 
                    console.log(eventosSeleccionados);
                    eventos.forEach(evento=>evento.category==event.target.value?(eventosSeleccionados.splice(eventosSeleccionados.indexOf(evento),1)):(console.log("no coincide el evento con la categorìa")))
                    console.log(eventosSeleccionados);

                    if (eventosSeleccionados.length==0) {
                    
                    contenedorTarjetas.innerHTML = crearTarjetas(eventos,fechaActual)
                    
                    // INTENTO DE QUE SE MUESTREN LOS RESULTADOS DE LA BÚSQUEDA AUNQUE NO HAYA RESULTADOS DE LOS CHEKS (EN LUGAR DE VOLVER A 0 DIRECTAMENTE
                    //)}else if(eventosBuscados.length>0){
                    //     console.log("entré al filtro conjunto con buscados");      
                    //     console.log(eventosBuscados);
                    //     eventosSeleccionados=eventosBuscados
                    //     contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados)
                    // return eventosSeleccionados  
                    }else{
                        contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados,fechaActual)
                    }
                



         }            
        })        
     }
}