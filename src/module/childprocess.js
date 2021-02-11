const { exec, spawn } = require('child_process');

/*exec('ls -la', (err, stdout, sterr) => {
  if (err) {
    console.log(err)
    return false
  }

  console.log(stdout)
})

exec('node module/error.js', (err, stdout, sterr) => {
  if (err) {
    console.log(err)
    return false
  }

  console.log(stdout)
})*/

let proceso = spawn('ls', ['-la'])

// console.log(proceso)
// console.log(proceso.pid)
// console.log(proceso.connected)

//cuando corre el proceso la data que obtenga la vamos a mostrar
proceso.stdout.on('data', function(data) {
  //mediante la varaible proceso podemos acceder a sus metodos
  console.log('Process is killed?:', proceso.killed)
  console.log(data.toString()) //imprime la data
})


// justo es la ultima linea del proceso, al ejecutarse se imprime
proceso.on('exit', () => {
  console.log('El proceso terminó!') //avisa que el proceso termino
  console.log('Process is killed?:', proceso.killed) //pero aun no muere
})
