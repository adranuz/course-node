const fs = require('fs') //no se debe manejar como una promesa

const file = process.argv[2] 
if(!file) { 
  throw new Error('Debes indicar el archivo que quieres leer') 
}

const content = fs.readFile(file, (err, content) => {
  if (err) {
    return console.log(err)
  }
  
  const lines = content.toString().split('\n').length
  console.log(lines)
})
