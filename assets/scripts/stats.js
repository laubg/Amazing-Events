// APIS------------------------------------------------------------------------------
let urlApi= "../assets/scripts/data.json"
// let urlApi= "https://mindhub-xj03.onrender.com/api/amazing"

//Chequear funcionamiento fetch---------------------------------------------
// console.log(fetch("https://mindhub-xj03.onrender.com/api/amazing"))


function traerDatos() {
    fetch(urlApi)
    .then(response => response.json())
    .then(datosApiEventos => {
        // throw new Error("ocurrió un error al traer los datos");
        console.log(datosApiEventos);
        eventos = datosApiEventos.events

        console.log(eventos)
        let fechaActual= datosApiEventos.currentDate
        console.log(fechaActual)
    
        // console.log(crearTarjetas(eventos));

        arrayPasados = eventosPasados(eventos, fechaActual)
        arrayFuturos = eventosFuturos(eventos, fechaActual)
        console.log(arrayPasados)
      
        imprimirTabla(resultados(asistencia(arrayPasados), asistencia(arrayPasados).reverse(), capacidad(arrayPasados)), "datosSuperior")
   
        // Tabla de calculo
        imprimirSegundaTabla(tablaDatos(arrayFuturos), "upcoming")
        imprimirSegundaTabla(tablaDatos(arrayPasados), "past")
        })
    .catch(error =>{
    console.log(error);
    })  
}

traerDatos()

// Filtrar eventos por fecha--------------------------------------------------------------------------------

function eventosFuturos(data, fechaActual) {
    return data.filter(evento => evento.date > fechaActual)
}
  
function eventosPasados(data, fechaActual) {
    return data.filter(event => event.date < fechaActual)
}

// Eventos Pasados--------------------------------------------------------------------------------

function asistencia(arrayPasados) {
    const arrayPorcentaje= arrayPasados.map(event => {
      return {
        asistencia: (event.assistance / event.capacity) * 100,
        nombreEvento: event.name
      }
    })
    arrayPorcentaje.sort((a, b) => b.asistencia - a.asistencia)
    console.log(arrayPorcentaje)
    return arrayPorcentaje
  
  }
  
  function capacidad(arrayPasados) {
    const arrayCapacidad = arrayPasados.map(evento => {
      return {
        capacidad: evento.capacity, //ver calculo.
        nombreEvento: evento.name
      }
    })
    arrayCapacidad.sort((a, b) => b.capacidad - a.capacidad)
    console.log(arrayCapacidad)
    return arrayCapacidad
  
  }
  
  function resultados(mayorPorcentaje, menorPorcentaje, mayorCapacidad) {
    let todos = {
      mayorPorcentaje: mayorPorcentaje[0].nombreEvento,
      menorPorcentaje: menorPorcentaje[0].nombreEvento,
      mayorCapacidad: mayorCapacidad[0].nombreEvento
    }
    return todos
  }
  
  function imprimirTabla(resultados, contenedor) {
    const tabla = document.getElementById(contenedor)
    tabla.innerHTML = `
    <tr>
        <td>${resultados.mayorPorcentaje}</td>
        <td>${resultados.menorPorcentaje}</td>
        <td>${resultados.mayorCapacidad}</td>
    </tr>
    `
  }
  
  
  
  function tablaDatos(arr) {
    let categorias = Array.from(new Set(arr.map(a => a.category)));
    let eventCategorias = categorias.map(cat => arr.filter(event => event.category == cat))
    let resultado = eventCategorias.map(eventCat => {
      let calculo = eventCat.reduce((acc, event) => {
        console.log(event)
        acc.categoria = event.category;
        acc.ingresos += event.price * (event.assistance || event.estimate);
        acc.asistencia += ((event.assistance || event.estimate) * 100) / event.capacity
        console.log(acc);
        return acc
      }, {
        categoria: "",
        ingresos: 0,
        asistencia: 0
      })
      calculo.asistencia = calculo.asistencia / eventCategorias.length
      console.log(calculo);

      return calculo
    })
    console.log(resultado);
    return resultado;
  }
  
  function imprimirSegundaTabla(arr, id) {
    const tablaFuturos = document.getElementById(id)
    let html = arr.map(eventos => {
      return `
        <tr>
            <td>${eventos.categoria}</td>
            <td>$${eventos.ingresos}</td>
            <td>${eventos.asistencia}%</td>
        </tr>
        `
    })
   
    tablaFuturos.innerHTML = html.join("")
  }
  