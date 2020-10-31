const fs = require('fs')

//recursive se encarga de decirle que estan encadenadas las carpetas que queremos
fs.mkdir('platzi/escuela-js/node', { recursive: true}, err => {
 if(err) {
   return console.log(err)
 }
})