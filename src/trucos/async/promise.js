function hola(nombre) { //funcioncita
  return new Promise(function(resolve, reject) { //que se convierte en promesa
    setTimeout(function() { //y ahora es asincrona
      console.log('Hola', nombre)
      resolve(nombre)
    },1000)
  })
}

function hablar(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Hablando con...', nombre)
      resolve(nombre)
    },1000)
  })
}

function adios(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Adios', nombre)
      resolve()
    },1000)
  })
}

console.log('Ininciando el proceso')
hola('Adrian') //corre esta promesa
  .then(hablar) //si sale bien has esto
  .then(hablar) //si sale bien has esto
  .then(hablar) //si sale bien has esto
  .then(adios) //si sale bien has esto
  .catch(error => { //si sale mal has esto
    console.log('Hubo un error')
  })