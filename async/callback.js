
function hola(nombre, callback) {
  setTimeout(function() {
    console.log('hola', nombre)
    callback()
  })
}

function adios(nombre, callback) {
  setTimeout(function() {
    console.log('adios', nombre)
    callback()
  })
}

function hablar(nombre, callback) {
  setTimeout(function() {
    console.log('Hablando con...', nombre)
    callback()
  })
}


console.log('Inicia el proceso')
hola('Adrian', function() { //al parecer el function como parametro es necesario en callbacks
  hablar('Adrian', function() {
    hablar('Adrian', function() {
      hablar('Adrian', function() {
        hablar('Adrian', function() {
          adios('Adrian', function() {
            console.log('Todo terminó')
          })
        })
      })
    })
  })
})