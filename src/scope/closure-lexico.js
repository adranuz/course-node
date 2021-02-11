/* resumen de closure
  1. Declara las variables que quieres que tengan memoria
  2. Declara el closure: funcion dentro de funcion: funcion manejadora de memoria
  3. Retorna la funcion manejadora de memoria
  4. Hereda tu funcion a otras variables
  5. Ejecutala varias veces y ve como recuerda su valor
*/
const buildCount = (i) => {
  let count = i; // 1
  const displayCount = () => { // 2
    console.log(count++)
  }
  return displayCount; // 3
}

const myCount = buildCount(2); // 4
myCount() // 5
myCount()
myCount()
myCount()