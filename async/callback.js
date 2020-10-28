// ------------------- Ejercicio 1
function hola(nombre, callback) {
  setTimeout(() => {
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

// ------------------- Ejercicio 2

const asyncCallBack = (callback) => {
  setTimeout(() => {
    if (Math.random() < 0.5) { //50% posible que pase un error
      return callback(null, "Hello World") //No pasa nada
    } else {
      callback(new Error("Errors happening")) //Pasó un error
    }
  },2000)
}

asyncCallBack((err, msg) => {
  if (err) {
    console.log("error", err)
  } else {
    console.log("message", msg)
  }
})
