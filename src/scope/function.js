const fruits = () => {
  var fruit = 'apple'
  console.log(fruit)
}
fruits()

//error porque solo esta en el scope de la funcion
// console.log(fruit) 

const vegetables = () => {
  var x = 1
  var x = 2 // var permite reasignar
  let y = 1
  // let y = 2 // las declaraciones let no pueden reasignarse
  console.log(x,y)
}
vegetables()