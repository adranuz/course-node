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

function main() {
  let nombre = await hola('Adrian') //hola devuelve el nombre, podemos usarlo
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('terminael proceso')
}

//Flujo de la aplicacion
console.log('Empezamos el proceso')
main()
console.log('Segunda instruccion, nomas pa que se vea')