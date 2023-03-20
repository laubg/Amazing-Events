const contenedorTarjetas= document.querySelector('.cards')

const evento= data.events;

let eventosBuscados=[]


// console.log(evento);
// console.log(data.events);
// let arrayModificado= 

// Creación de tarjetas----------------------------------------------------------------

let nuevasTarjetas = crearTarjetas(evento)
               
contenedorTarjetas.innerHTML = nuevasTarjetas
   
function crearTarjetas(arrayEventos){
    let tarjetas =""
    
    arrayEventos.forEach(evento => {
        
        tarjetas += `<div class="card col-sm-6 col-md-4 " >        
        <img src= ${evento.image}  class="card-img-top" alt="cinema" >    
        <div class="card-body style="heigth:auto"">  
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>                         
            <div class="row card-row">                               
                <div class="precio col-md-6 col-sm-12"> <h6>   $${evento.price}</h6></div>                                
                <div class="botón col-md-6 col-sm-12"><a href="/details.html?id=${evento._id}" class="btn btn-primary">Details</a></div>                        
            </div>                   
        </div>                    
    </div>               `
    });
    
    return tarjetas

    
}    

// Buscador--------------------------------------------------------------------------------
let buscador= document.querySelector(".form-control")
// console.log(buscador);

let formulario= document.querySelector(".formb")

let filtrado= filtrarEventos(evento)

console.log(formulario);


function filtrarEventos(evento){
    buscador.addEventListener("change", ()=>{eventosBuscados = evento.filter((evento) => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
        // console.log(buscador.value);
        // conseventos);

        crearTarjetas(eventosBuscados);
        // console.log(crearTarjetas(eventosBuscados));
        contenedorTarjetas.innerHTML = crearTarjetas(eventosBuscados);


    })

     formulario.addEventListener("submit", (event)=>{event.preventDefault()})
}
// filtrarEventos(evento)


// Checkboxes------------------------------------------------------------------------------
let categorias = document.querySelectorAll('input[type=checkbox]')
console.log(categorias);

let eventosSeleccionados = []

// let eventosNoSeleccionados = []
// let eventosSinQuitar=[]

let seleccion= seleccionarCategorias(categorias)

function seleccionarCategorias(categorias) {
    for (let categoria of categorias ) {
        categoria.addEventListener( "click", (event) =>{
            if(event.target.checked){
                 // seleccionados+=data.events.filter((event) => data.events.category.includes(event.target.value)
               evento.forEach(evento=>evento.category==event.target.value?(eventosSeleccionados.push(evento)):(console.log("no coincide el evento con la categorìa")))
               
                 //(eventosSeleccionados.find(evento=>evento.category==event.target.value))
                //  console.log(eventosSeleccionados);
                 crearTarjetas(eventosSeleccionados);
                //  console.log(crearTarjetas(eventosSeleccionados));
                 contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados);  
                //  console.log(categorias);      
                 
            }else{
                // evento.forEach(evento=>evento.category==event.target.value?(eventosSeleccionados.push(evento)):(console.log("no coincide el evento con la categorìa")))
                console.log(eventosSeleccionados);
                evento.forEach(event=>evento.category==event.target.value?(eventosSeleccionados.splice(eventosSeleccionados.indexOf(evento.values())),1):(console.log("no coincide el evento con la categorìa")))
                console.log(eventosSeleccionados);
                // eventosSinQuitar= eventosSeleccionados.filter(evento=>evento != eventosSeleccionados)

            //  contenedorTarjetas.innerHTML =""
            //  crearTarjetas(eventosSeleccionados);
             console.log(eventosSinQuitar);
             // seleccionados.delete(evento)
            //  eventosSeleccionados= []
             // categorias.unchecked(crearTarjetas(evento));(console.log("no es undefined"))
             // crearTarjetas(evento)

         }
            
        })
        
     }
}



// Condicional para sumar filtrados-------------------------------------------------------

// let eventosFiltrados=[]

// let resultadoDeFiltrado= filtrar(evento);

// function filtrar(e) {
//     if(buscador.addEventListener("change",  modifyText, true)& categorias.addEventListener("click",checked, false)){
//         eventosFiltrados =+ eventosBuscados
//         console.log(eventosFiltrados)
//       }
//     if else(buscador.addEventListener("change",  modifyText, false)& categorias.addEventListener("click",checked, true)){
//         eventosFiltrados =+ eventosSeleccionados
//         console.log(eventosFiltrados)
//     }else{
//         eventosFiltrados =+ eventosSeleccionados
//         console.log(eventosFiltrados)}
// }

//el.addEventListener("click", modifyText, false)
//c?t:f
//c?t:f?t:f

// for (let evento of eventosFiltrados) {

//     if (evento.category==seleccionados.c) {
//         p
//     }

//evento.category==event.target.value?(eventosSeleccionados.push(evento)):(console.log("no funciona")))
    
// access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";


console.log(eventosSeleccionados)
// Estructura filter--------------------------------------
// const evenNumbers = numbers.filter(number =>number%2=0)
// console.log(evenNumbers)
// Estructura forEach--------------------------------------
// const numbers= [1,2,3,4,5,6,7,8,9]
// numbers.forEach(number=>console.log(number))


//datafilter.push(dataFilterAux.filter((event)=>event.category.includes(categoria)));

//evento.estimate == undefined ? ("Assistance: "+ evento.assistance) : ("Estimate: "+ evento.estimate)




// const contenedorTarjetas = document.querySelector('')
// let tarjetasGeneradas = crearTarjetas(personas)
// contenedorTarjetas.innerHTML =tarjetasGeneradas

// function crearTarjetas(arrayDatos){
//    let tarjetas = ''
   
//    for (const persona of arrayDatos){
//    tarjetas+= '<div class="card text-black" style="width"
//            <img src="https://images.hola.com/imagenes/mascotas"
//                <div class="card-body"
//                <h5 class="card-title">${persona.name}</h5>'(....)
//    }return tarjetas
// }



// URL parameter---------------------------------------
// function seeDetail(id) {
//     window.location.href = `./details.html?id=${id}`
//     console.log(window.Location.href);
// }
// const params = new URLSearchParams(location.search)
// const id = params.get("id")
// ``

// OTRO EJEMPLO
// let container = document.getElementById("container-cards");
// let html = "";

// for(let info of data) {
//     html += `
//     <div class="card">
//         <img src="${info.img}" alt="${info.name} picture">
//         <div class="detail-flex">
//             <p>Name: <span>${info.name}</span></p>
//             <p>Country: <span>${info.country}</span></p>
//         </div>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto maxime, modi, reprehenderit eveniet dolorum vitae sunt ipsum in voluptate veniam adipisci iure animi exercitationem soluta illum nobis! Commodi, dolore.
//         </p>
//         <input type="button" onclick="seeDetail('${info.id}')" value="See more" id="button">
//     </div>
//     `
// }


// function seeDetail(id) {
//     window.location.href = `./detail.html?id=${id}`
// }
// container.innerHTML = html

// buscador.addEventListener("change", ()=>{ console.log("Ocurrió un cambio en el buscador");})




// function crearCards(arrayEventos){
//     let tarjetas =""
    

//     for (const tarjeta of arrayEventos) {     
        
        
//         tarjetas += `<div class="card col-sm-6 col-md-4 " >        
//                     <img src= ${tarjeta.image}  class="card-img-top" alt="cinema" >    
//                     <div class="card-body style="heigth:auto"">  
//                         <h5 class="card-title">${tarjeta.name}</h5>
//                         <p class="card-text">${tarjeta.description}</p>                         
//                         <div class="row card-row">                               
//                             <div class="precio col-md-6 col-sm-12"> <h6>   $${tarjeta.price}</h6></div>                                
//                             <div class="botón col-md-6 col-sm-12"><a href="details.html" class="btn btn-primary">Details</a></div>                        
//                         </div>                   
//                     </div>                    
//                 </div>               `   }  
//                 return tarjetas

// }