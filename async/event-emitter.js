const EventEmmiter = require('events')

class Logger extends EventEmmiter { //clase Logger
  execute(callback) { //metodo execute 
    console.log('Before') //imprime esto
    this.emit('start') //evento configurable
    callback() //callback que nos dice que esta en este punto
    this.emit('finish') //otro evento diferente
    console.log('After') //ahora imprime esto
  }
}

const logger = new Logger() //variable que hereda a Logger

logger.on('start', () => console.log("Starting")) //edita evento
logger.on('finish', () => console.log("finishing")) //edita evento
logger.on('finish', () => console.log("It's Done")) //edita evento

logger.execute(() => console.log("This is the callback")) //edita evento

logger.execute(() => setTimeout(() => {
  console.log("This is the callback")
},500)) //edita evento