const fs = require('fs')
const path = __dirname + '/superfile.txt';
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

function leer(ruta, callback) {
	fs.readFile(ruta, (err, data) => {
    callback(data.toString())
  });
}
leer('mynewfile3.txt', console.log)