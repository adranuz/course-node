function saludar() { //tenemos una funcion o algo
  console.log('hola qe hace')
}

//lo exportamos para que otros archivos puedan alimentarse solo de esto
// module.exports = saludar 
module.exports = {
  saludar,
  prop1: 'Hola que tal'
}