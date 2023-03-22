
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












function traerDatos() {
    fetch(urlApi)
    .then(response => response.json())
    .then(datosApiEventos => {
        // throw new Error("ocurrió un error al traer los datos");
        console.log(datosApiEventos);
        eventos = datosApiEventos.events
        let eventosBuscados=[]
        let eventosSeleccionados = []
        console.log(eventos)
        crearTarjetas(eventos) 
        console.log(crearTarjetas(eventos));
        filtrarEventos(eventos,eventosSeleccionados)
        seleccionarCategorias(categorias,eventosBuscados)
        // console.log(crearTarjetas(eventos));
    })
    .catch(error =>{
        console.log(error);
    })  
}

traerDatos()




// console.log(evento);
// console.log(data.events);
// let arrayModificado= 

// Creación de tarjetas----------------------------------------------------------------            

   
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
    
    return contenedorTarjetas.innerHTML = tarjetas



    
}    



// let filtroBuscados= filtrarEventos(eventos,eventosSeleccionados)



//éste no estaría funcionando (la funcionalidad compartida, no toma eventosSeleccionados)
function filtrarEventos(eventos,eventosSeleccionados){
    buscador.addEventListener("keyup", ()=>{
    

    if (eventosSeleccionados.length>0) {
        eventosBuscados = eventosSeleccionados.filter((evento) => evento.name.toLowerCase().includes(buscador.value.toLowerCase()) )
        console.log(eventosSeleccionados.length)
        console.log("funciona con eventos seleccionados en checks");
        console.log(eventosBuscados);
        

    } else {
        eventosBuscados = eventos.filter((evento) => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
        console.log(eventosSeleccionados.length)
        console.log(eventosBuscados);
    }
   
        // console.log(buscador.value);
        // conseventos);
        if(eventosBuscados.length == 0){
            contenedorTarjetas.innerHTML = `<h4 class="d-flex flex-row justify-content-center alig-items-center">No existen eventos relacionados a su búsqueda</h4> <img src="./assets/img/a27d24_9c9a8ce8401f4dc1b33acc16118f2e10_mv2.gif" style="width:260px;"></img>`
            return
        }
        if (eventosBuscados.length==0) {
            contenedorTarjetas.innerHTML = crearTarjetas(eventos)
            return eventos  
            }else{
                crearTarjetas(eventosBuscados);
                console.log(crearTarjetas(eventosBuscados));
                contenedorTarjetas.innerHTML = crearTarjetas(eventosBuscados);
                // varIntermediaria=varIntermediaria.push(eventosBuscados)
                console.log(eventosBuscados)
                console.log(eventosBuscados.length);
                // console.log(varIntermediaria)
                // filtrar(varIntermediaria)
                seleccionarCategorias(categorias,eventosBuscados)
                return eventosBuscados
            }






    })

     formulario.addEventListener("submit", (event)=>{event.preventDefault()})
}
// filtrarEventos(evento)






// let eventosNoSeleccionados = []
// let eventosSinQuitar=[]

// let seleccion= seleccionarCategorias(categorias,eventosBuscados)


function seleccionarCategorias(categorias, eventosBuscados) {
    for (let categoria of categorias ) {
        categoria.addEventListener( "click", (event) =>{

            console.log(eventosBuscados)
            if(event.target.checked & eventosBuscados.length>0){
               
                console.log("entré");              
                eventosSeleccionados=eventosBuscados.filter(evento=>evento.category==event.target.value)
                contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados);
                if(eventosSeleccionados.length == 0){
                    contenedorTarjetas.innerHTML = `<h4 class="d-flex flex-row justify-content-center alig-items-center">No existen eventos relacionados a su búsqueda</h4> <img src="./assets/img/a27d24_9c9a8ce8401f4dc1b33acc16118f2e10_mv2.gif" style="width:260px;"></img>`
                    return
                }   else{
                    contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados);
                }
                
            } 
                else if(event.target.checked & eventosBuscados.length==0){
                    eventos.forEach(evento=>evento.category==event.target.value?(eventosSeleccionados.push(evento)):(console.log("usa eventos")))      
                    contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados);
                
            
                }else{
 
                    console.log(eventosSeleccionados);
                    eventos.forEach(evento=>evento.category==event.target.value?(eventosSeleccionados.splice(eventosSeleccionados.indexOf(evento),1)):(console.log("no coincide el evento con la categorìa")))
                    console.log(eventosSeleccionados);

                    if (eventosSeleccionados.length==0) {
                    
                    contenedorTarjetas.innerHTML = crearTarjetas(eventos)
                    
                    // INTENTO DE QUE SE MUESTREN LOS RESULTADOS DE LA BÚSQUEDA AUNQUE NO HAYA RESULTADOS DE LOS CHEKS (EN LUGAR DE VOLVER A 0 DIRECTAMENTE
                    //)}else if(eventosBuscados.length>0){
                    //     console.log("entré al filtro conjunto con buscados");      
                    //     console.log(eventosBuscados);
                    //     eventosSeleccionados=eventosBuscados
                    //     contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados)
                    // return eventosSeleccionados  
                    }else{
                        contenedorTarjetas.innerHTML = crearTarjetas(eventosSeleccionados)
                    }
                



         }            
        })        
     }
}



// Condicional para sumar filtrados----------------------------------------



// let resultadoDeFiltrado= filtrar(varIntermediaria);

// let filtradoFinal = filtradoConjunto(evento)

// function filtradoConjunto(evento) {
// let eventosFiltrados=[]
// eventosFiltrados+= eventosSeleccionados+ eventosBuscados
// console.log(eventosFiltrados);

//     // let filtro1 = filtrarEventos(evento)
    
//     // crearTarjetas(seleccion)

//     // console.log(crearTarjetas(seleccion));
//     // let seleccion= seleccionarCategorias(categorias)
    
// }
// function filtrar(varIntermediaria) {
//     let eventosFiltrados=[]

//         eventosFiltrados= new Set(varIntermediaria)
//         console.log(varIntermediaria);
//         console.log(eventosFiltrados);
// }

// function filtrar(eventosBuscados, eventosSeleccionados) {

//     let eventosFiltrados=[]
//     if(buscador.addEventListener("change", true)& categorias.addEventListener("click",checked, false)){
//         eventosFiltrados =+ eventosBuscados
//         console.log(eventosFiltrados)
//       }
//     else if(buscador.addEventListener("change", false)& categorias.addEventListener("click",checked, true)){
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

// VER EJEMPLO FILTRO
// function superFiltro(){
//     let primerFiltro = filtrarPorTexto(people,input.value)
//     let segundoFiltro = filtrarPorPais(primerFiltro)
//     pintarPersonas(segundoFiltro)
// }

// pintarPersonas(people)
// crearCheckBoxes(people)

// function filtrarPorTexto(array,texto){
//     let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
//     return arrayFiltrado
// }

// function filtrarPorPais(array){
//     let checkboxes = document.querySelectorAll("input[type='checkbox']")
//     console.log(checkboxes);
//     let arrayChecks = Array.from(checkboxes)
//     let arrayChecksChecked = arrayChecks.filter(check => check.checked)
//     console.log(arrayChecksChecked);
//     let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
//     console.log(arrayChecksCheckedValues);
//     let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.country))
//     console.log(arrayFiltrado);
//     if(arrayChecksChecked.length > 0){
//         return arrayFiltrado
//     }
//     return array
// }
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
