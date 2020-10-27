const fs = require('fs')
// const process = require('process')

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('utf-8')
readableStream.on('data', function(chunk) {
  data += chunk
})
readableStream.on('end', function() {
  // console.log(data)
})


//-------------------------
//buffer de escritura para consola
// process.stdout.write('Hola')
// process.stdout.write('qué')
// process.stdout.write('hace')

//-------------------------
const { Transform } = require('stream') //obtiene la clase Transform de stream
const { inherits } = require('util') //obtiene la funcion inherits de util

function ToMayus() {
  Transform.call(this)
}

/** inherits
 * Es una funcion que hace que una nueva clase herede de manera prototypal
 * otra clase, en este caso ToMayus hereda la xlase de Transform
 */
inherits(ToMayus, Transform)

/** ToMayus.prototype._transform 
 * Lo que se hace a continuacion es entrar en el metodo que contiene ToMayus
 * que fue heredado y reescribirlo
 */
ToMayus.prototype._transform = function(chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase()
  this.push(chunkMayus)
  callback()
}

let mayus = new ToMayus() //objeto tipo ToMayus heredado de transform con su metodo editado

//recordar que esto es una sola linea
readableStream //buffer de lectura que contiene la data
  .pipe(mayus) //corremos los metodos de mayus
  .pipe(process.stdout) //buffer de escritura 


//los pipes es una manera de conectar 2 streams
