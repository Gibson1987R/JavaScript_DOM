//todo Formas de Seleccionar elementos del HTML: cualquier selector debe llamar al objeto document, seguidamente con punto acceden al objeto. Una vez seleccionado podemos manipular los elementos con codigo a nuestro antojo

//* querySelector: retorna uno o ninguno elemento, es exactamente igual a los selectores de css; por lo que podemos valernos de BEM para elegir exactamente lo queramos. Anidando o referenciando clases.

//* manera-1
const heading = document.querySelector('.header__texto h2')
console.log(heading)

//* manera-2 es mas recomendado usar los id para el js
// const heading2 = document.querySelector("#heading");
// console.log(heading2);

//todo Manipulando el objeto
heading.textContent = 'Mamasita estas bellisima Anais'
heading.classList.add('nueva-clase')

//? querySelectorAll: retorna cero elementos si el selector esta mal el selector. Retorna todos los de ese tipo si esta bien

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)

// enlaces[1].textContent = 'Mi esposa es Anais' //? Agrega texto o contenido dentro de la etiqueta
enlaces[1].href = 'http://google.com' //?Agrega la direccion a navegar
enlaces[1].classList.add('mi-esposa') //?Agrega la clase
enlaces[1].classList.remove('mi-esposa') //?Quita la clase

//! getElementById
const heading2 = document.getElementById('heading') //! No necesita poner el simbolo de # para los ides porque ya busca por id
console.log(heading2)


//todo Generando nuevo contenido HTML, se utiliza el metodo .createElement('TAGNAME')

const nuevoEnlace = document.createElement('A')

//* Agragar el href
nuevoEnlace.href = 'nuevo-enlace.html'
//* Agragar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace'
//* Agragar el clase
nuevoEnlace.classList.add('navegacion__enlace')


//* Agregarlo al documento en dos pasos: 

//*1 ubicar el elemento que queremos para padre 
const navegacion = document.querySelector('.navegacion')

//*2 agregar el elemento como nuevo hijo al padre
navegacion.appendChild(nuevoEnlace)

console.log(navegacion)

//todo Eventos: son muchos y de diferentes tipos, pero la forma en como se detecta los eventos es con addEventListener()

//Todo El evento que primero ocurre es el de cargado de un pagina, y esto se detecta en el objeto window que es la ventana global

console.log(1)

//* Load espera hasta que todo este listo y luego lanza el console.log()
//window.addEventListener('load', ()=> console.log(2))

//* Similar a lo anterion window.onload espera hasta que todo este listo y luego lanza el console.log()
window.onload = function() {
  //console.log(3)
}

//* A diferencia load, DOMContentLoaded solo espera la carga del HTML, YA QUE SOLO REQUERIMOS PARA EJECUTAR NUESTRO CODIGO EL HTML, este evento es el que posiblemente mas usemos
document.addEventListener('DOMContentLoaded', imprime)

//? Puedes tener tu callback como una funcion separada y despues pasar el nombre como argumento al evento
function imprime() {
  //console.log(4)
}

console.log(5)

//* Evento de scroll
// window.onscroll = function () {
//   console.log('Estamos haciendo scrolling...')
// }

// //!INICIA COMENTARIO GLOBAL DE LAS LECCIONES
// //Todo Seleccionar un Elemento y Asosiarle un evento

// //* El evento click puede asosiarse a lo que sea
// /* 
// const botonEnviar = document.querySelector('.boton--primario')

// botonEnviar.addEventListener('click', function (evento) {
//   //* callback tiene a disponible evento, y puede consultar
//   console.log(evento)

//   //* evita el envio por defecto, sirve para validar el formulario
//   evento.preventDefault()

//   console.log(`enviando formulario`)
// })
// console.log(botonEnviar) */

// //Todo Eventos de Inpust y Textarea

// //? Un objeto que utilizare mas adelante con datos del form
// const datosFormt = {
//   nombre: '',
//   email: '',
//   mensaje: ''
// }

// const inputNombre = document.querySelector('#nombre')
// const inputMail = document.querySelector('#email')
// const inputMensaje = document.querySelector('#mensaje')

// //*Tenemos una funcion que identica en los tres eventos CODIGO REPETIDO
// /*
// inputNombre.addEventListener('input', function (evento) {
//   console.log(evento)
//   console.log(evento.target.value)
// })

// inputMail.addEventListener('input', function (evento) {
//   console.log(evento)
//   console.log(evento.target.value)
// })

// inputMensaje.addEventListener('input', function (evento) {
//   console.log(evento)
//   console.log(evento.target.value)
// }) */

// //* Quitando el codigo repetido

// inputNombre.addEventListener('input', leerInput)

// inputMail.addEventListener('input', leerInput)

// inputMensaje.addEventListener('input', leerInput)

// function leerInput(evento) {
//   // console.log(evento)
//   // console.log(evento.target.value)

//   datosFormt[evento.target.id] = evento.target.value
//   console.log(datosFormt)
// }

// //Todo El Evento Submit: debe a fuerza tener un submit, y asosiarse solo a un formulario
// const formulario = document.querySelector('.formulario')

// formulario.addEventListener('submit', function (evento) {
//   evento.preventDefault()
//   console.log(`Enviando Formulario`)
// })
// //!CIERRE COMENTARIO GLOBAL DE LAS LECCIONES


//Todo Recomendacion para la organizacion del codigo.

//? 1 Variables arriba
//? 2 Eventos en segundo lugar
//? 3 Funciones en tercer lugar

//? 1 VARIABLES
const separador = '#-#-#-#-#-#-#-#-#-#-#-#-#-#'

const datosFormt = {
  nombre: '',
  email: '',
  mensaje: ''
}

const inputNombre = document.querySelector('#nombre')
const inputMail = document.querySelector('#email')
const inputMensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

//? 2 EVENTOS
inputNombre.addEventListener('input', leerInput)
inputMail.addEventListener('input', leerInput)
inputMensaje.addEventListener('input', leerInput)


formulario.addEventListener('submit', function (evento) {
  evento.preventDefault()

  //*Validar
  const {nombre, email, mensaje} = datosFormt
  console.log(nombre)
  console.log(email)
  console.log(mensaje)

  if (nombre === '' || email === '' || mensaje === '') {
    //mostrarError('Todos los campos son obligatorios')
    mostrarAlerta('Todos los campos son obligatorios', 'error')

    return //Corta las ejecuciones de debajo como console.log
  } 
  
  //*Enviar
  //mostrarEnviado('Todo fue cargado correctamente')
  mostrarAlerta('Todo fue cargado correctamente')
})

console.log(separador)

//? 3 FUNCIONES
function leerInput(evento) {
  // console.log(evento.target.value)

  datosFormt[evento.target.id] = evento.target.value
  //console.log(datosFormt)
}

function mostrarAlerta(message, erro = null) {
  const alerta = document.createElement('p')
  alerta.textContent = message

  if (erro) {
    alerta.classList.add('error')
  } else {
    alerta.classList.add('correcto')
  }

  formulario.appendChild(alerta)

    setTimeout(()=>{
    alerta.remove()
  }, 5000)
}


//todo Estas fueron las funciones utilizadas para el formulario antes de la standarizacion mostrarAlerta()

// function mostrarEnviado(message) {
//   const enviado = document.createElement('P')
//   enviado.textContent = message
//   enviado.classList.add('correcto')

//   formulario.appendChild(enviado)

//   setTimeout(()=>{
//     enviado.remove()
//   }, 5000)
// }


// function mostrarError(message) {
//   const error = document.createElement('P')
//   error.textContent = message
//   error.classList.add('error')
  
//   formulario.appendChild(error)

//   setTimeout(()=>{
//     error.remove()
//   }, 5000)
// }



