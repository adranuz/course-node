// Visuializar cuanto tardan tus procesos largos
// y como mejorarlo
let sumar = 0
console.time('Todo')

console.time('Proceso 1')
for(let i = 0; i < 5000000000; i++) {
  sumar += 1;
}
console.timeEnd('Proceso 1')


console.time('Proceso 2')
for(let i = 0; i < 5000000000; i++) {
  sumar += 1;
}
console.timeEnd('Proceso 2')


function asincrona() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('Proceso asincrono terminado')
    },2500)
  })
}


console.time('Proceso asincrono')
console.log('Comienza asincrona')
asincrona()
.then(()=> console.timeEnd('Proceso asincrono'))



console.timeEnd('Todo')
