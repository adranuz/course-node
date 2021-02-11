const process = require('process')

process.on('beforeExit', () => { //justo antes de terminar
  console.log('El proceso va a terminar')
}) 


process.on('exit', () => { //justo al terminar
  console.log('El proceso acabó')
  setTimeout(() => {
    console.log('Esto no se va a ver nunca porque esta fuera del eventLoop')
  })
}) 

//cuando no se toman en cuenta errores
process.on('uncaughtException', (err, origen) => {
  console.error('Se nos olvidó capturar un error')
  console.error(err)
  setTimeout(() => {
    console.log('Esto si viene si hay errores')
  })
})

//una funcion que no existe nos manda el uncaughtException
functionThatNotExists() 

console.log('Esto si el error no se recoge no sale')

setTimeout(() => {
  console.log('Esto si se va a ver si no hay errores')
})
