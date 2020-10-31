const fs = require('fs')

fs.copyFile("cancion.txt", "song.txt", err => {
  if (err) {
    console.log(err)
  }
  console.log('El archivo fue copiado con exito')
})