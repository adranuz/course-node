const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello); // aqui imprime
}
helloWorld();

// console.log(hello); // aqui no imprime y manda error al llegar aqui
// Ambito lexico es que una variable puede existir en el entorno global
var scope = "i am global";

const functionScope = () => {
  var scope = " i am just local";
  const func = () => {
    return scope
  }
  console.log(func()) //aqui es donde se imprime 
}
functionScope()
console.log(scope)