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

const contenedorCards= document.querySelector('.cards')
console.log(data.events);

let newCards = crearCards(data.events)


contenedorCards.innerHTML = newCards

function crearCards(arrayDatos){
    let tarjetas =''

    for (const tarjeta of arrayDatos) {      
    
    tarjetas += '<div class="card col-sm-6 col-md-4 " ><img src="/assets/img/Cinema.jpg"class="card-img-top" alt="cinema"><div class="card-body">                            <h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>                         <div class="row card-row">                               <div class="precio col-md-6 col-sm-12"> <h6>$XXXXX</h6></div>                                <div class="botón col-md-6 col-sm-12"><a href="details.html" class="btn btn-primary">Details</a></div>                            </div>                    </div>                    </div>'
                } return tarjetas
}