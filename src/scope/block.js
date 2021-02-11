const fruits = () => {
  if (true) { // este es un block
    var fruits1 = 'apple'
    const fruits2 = 'banana'
    let fruits3 = 'orange'
    console.log('Block Scope:',fruits1,fruits2, fruits3)
  }
  console.log(
    'Out of block :',
    fruits1,
    // fruits2, const no puede ser accedida fuera del bloque 
    // fruits3 let no puede ser accedida fuera del bloque
  )
}
fruits()