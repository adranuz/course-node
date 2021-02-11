//  Un closure recuerda el ambito en el que ha sido creado
// esta variable contiene toda la logica de 
// const moneyBox = (coins) => {
//   var saveCoins = 0; // variable existente en moneyboc
//   saveCoins += coins;
//   console.log(`Money Box ${saveCoins}`)
// }
// moneyBox(5)
// moneyBox(10)

// crea esta funcion que guarda el valor de saveCoins
// moneybox es una funcion que puede ser referencia de otras entidades 
const moneyBox = () => {
  var saveCoins = 0; // inicializa variable que vive en este scope
  const countCoins = (coins) => { //declara countCoins
    saveCoins += coins;
    console.log(`Money Box ${saveCoins}`)
  }
  return countCoins; 

  // al inicializar moneyBox inicializamos saveCoins, countCoins
  // y regresamos countCoins
  
  // al ejecutarlo ejecutamos el retorno, es decir countCoins
  // pero con sus variables ya inicializadas
}

// se inicializa addMoney como una instancia de moneyBox
const addMoney = moneyBox(); //inicializa la copia(?)

// se inicializa addBill como una instacia de moneyBox, separada a addMoney
const addBill = moneyBox();

addMoney(2)
addMoney(2)
addMoney(10) //podemos ver la addicion en addMoney
addBill(20) //podemos ver la addicion en addBill sin tocar addMoney

// console.log(saveCoins) //error