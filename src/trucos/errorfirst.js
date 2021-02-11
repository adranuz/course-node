//siempre se debe enviar el error como primer parametro
//asi como se manda el callback como ultimo parametro
/**
 * Lanzar una excepcion con Throw dentro de un callback 
 * asincrono no va a funcionar… Solo nos va a funcionar en n bloque de codigo sincrono 
 */

function asincrona(callback) {
  setTimeout(()=> {
    try {
      let a = 3 + z 
      callback(null, a)
    } catch(err) {
      callback(err, null)
    }
  })
}

asincrona((err, data) => {
  if(err) {
    console.log(err, 'Es el error.')
    return false
    // throw //bloquea el proceso
  } else {
    console.log('Its ok', data)
  }
})