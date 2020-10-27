const http = require('http')

/** Aqui optenemos lod datos
 * Console.log va a la terminal
 * req es la info del servidor
 * res es la respuesta o lo que se obtiene en el front
 */

http.createServer(router).listen(3000)

console.log('Server on 3000')

function router(req, res) {
  console.log('Nueva peticion') //señal de peticion
  console.log(req.url) //print url
  
  // manejador de rutas
  switch (req.url) {
    case '/':
      res.write('Aqui escribiendo front desde el back con node')
      res.end() // finaliza la respuesta
      break

    case '/hola':
      res.write('holo :3, Aqui escribiendo front desde el back con node')
      res.end() 
      break
    default: 
      res.write('Error 404')
      res.end() 
      break
  }
}