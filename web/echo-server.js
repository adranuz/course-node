/*http es un modulo que se maneja a partir de eventos o de eventEmitters*/
const http = require('http') //modulo http
const server = http.createServer() //solo la server tool

/*el evento request ya esta definido, es cuando hacemos una peticion al server, que se traduce en llamar a la url con el puerto en el que trabaja
Para mandarle algo cuando esto pasa hay que manejar la respuesta como si fuera una promesa, porque lo es.
en este caso lo que respondemos en response seria el status, el header para explicar el tipo de dato y el contenido*/
server.on('request', (req, res) => {
  console.log(req.method, req.url)
  if (req.method === 'POST' && req.url == "/echo") {
    let body = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      body = Buffer.concat(body).toString()
      res.end(body)
    })

  } else {
    res.statusCode = 404
    res.end()
  }
})

// ejecutamos el servidor con el parametro 3000 que se asigna en el puerto
server.listen(3001)
console.log('Server in port 3000')// solo imprime en consola