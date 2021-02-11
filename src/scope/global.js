// global var
var hello = "Hello";
// var hello = "Hello +"; //sobreescribe la variable

let world = "Hello world";
// let world = "Hello world"; //genera un error de que no se puede reasignar

const helloworld = "Hello world completed";
// const helloworld = "Hello world completed"; //al ser constante no se puede reasignar

// accediendo desde el scope global a variables globales
console.log('Global scope:', hello, world, helloworld);

// accede a variables globales desde function scope
function printAll() {
  console.log('Function scope:', hello, world, helloworld);
}
printAll();

// crea una variable global a travez de 
function createGlobalVar() {
  globalVar = "Es mala practica hacerlo de esta manera";
}
createGlobalVar();
console.log('Global Scope:',globalVar);

// genera una variable global a travez de un function scope dentro de otro function scope
//   de esta manera accedemos al entorno global y es mala practica
const globalMaker = () => {
  var functionVar = globalVar2 = 'Im global, bad habbit';
  console.log(functionVar)
}
globalMaker()
console.log(globalVar2);