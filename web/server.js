/*http es un modulo que se maneja a partir de eventos o de eventEmitters*/
const http = require('http') //modulo http
const server = http.createServer() //solo la server tool

/*el evento request ya esta definido, es cuando hacemos una peticion al server, que se traduce en llamar a la url con el puerto en el que trabaja
Para mandarle algo cuando esto pasa hay que manejar la respuesta como si fuera una promesa, porque lo es.
en este caso lo que respondemos en response seria el status, el header para explicar el tipo de dato y el contenido*/
server.on('request', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  res.end('Hello world \n')
})

// ejecutamos el servidor con el parametro 3000 que se asigna en el puerto
server.listen(3000)
console.log('Server in port 3000')// solo imprime en consola