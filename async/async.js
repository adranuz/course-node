
/* Dejamos que estas funciones sean promesas para que sean asincronas
pero puede ser cambiados por fetchs o cualquier cosa*/
function hola(nombre) { // funcion hola
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Hola', nombre)
      resolve(nombre) //si igualamos a una var este sera el valor
    },1000)
  })
}
function hablar(nombre) { //funcion hablar
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Hablando con...', nombre)
      resolve(nombre)
    },1000)
  })
}
function adios(nombre) { //funcion adios
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Adios', nombre)
      resolve()
    },1000)
  })
}

async function main() {
  let nombre = await hola('Adrian') //hola devuelve el nombre, podemos usarlo
  await hablar(nombre)
  await hablar(nombre)
  await hablar(nombre)
  await adios(nombre)
  console.log('terminael proceso')
}

//Flujo de la aplicacion
console.log('Empezamos el proceso')
main()
console.log('Segunda instruccion, nomas pa que se vea')


// ---------------------------------------- Ejercicio 2
// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {

const promise = () => new Promise((resolve, reject) => { 
  setTimeout(() => {
    if (Math.random() < 0.5) { //50% posible que pase un error
      resolve("Hello World") //No pasa nada
    } else {
      reject(new Error("Errors happening")) //Pasó un error
    }
  }, 2000)
})

async function asyncAwait() {
  try {
    const msg = await promise()
    console.log("message", msg)
  } catch(err) {
    console.log("error", err)
  }
}

asyncAwait()