
console.log(global) //objeto con todos los modulos globales
/**Contiene 
 * Setinterval
 * setTimeout
 *  y otras mas
 */
console.log(process) //informacion del proceso

console.log(__dirname) //obtiene el directorio

console.log(__filename) //obtiene hasta el archivo

global.myVariable = 'elValor' //variables globales
console.log(myVariable)

let i = 0
const interval = setInterval(function() { //crea interval
  console.log('Hola', i)
  if (i == 5) {
    clearInterval(interval) //borra el interval
  }
  i++
},1000)

setImmediate(function() { //inicia antes de cualquier cosa
  console.log('inmediatamente impreso')
})
