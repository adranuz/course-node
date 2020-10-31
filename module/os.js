const os = require('os')

// const size = 1024
// function kb(bytes) { return bytes / size }
// function mb(bytes) { return kb(bytes / size) }
// function gb(bytes) { return mb(bytes / size) }
// console.log(kb(os.freemem())) 
// console.log(mb(os.freemem()))
// console.log(gb(os.freemem()))

// console.log(gb(os.totalmem()))

// console.log(os.homedir())

// console.log(os.tmpdir())
// console.log(os.hostname())console.table(os.cpus())
//los nucleos de tu pcs
console.log(os.networkInterfaces().Ethernet.map(i => i.address))

