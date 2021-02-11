let nombre = process.env.NOMBRE || 'sin nombre'//guardamos la variable de entorno en una local
let web = process.env.WEB || 'no tengo web'
console.log('hola' + nombre) //obtenemos la variable de entorno
console.log('mi web es' + web) //obtenemos la variable de entorno