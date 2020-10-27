const fs = require('fs').promises
const path = __dirname + '/textito.txt'
const message = {
  empty: '',
  createNwrite: 'The file has been created successfully.',
  
  content: 'Hello how is it going?',
  write: 'The file has been written successfully.',
  read: 'The file has been read successfully.',
  delete: 'The file has been deleted successfully.',
  
  error: 'There is something wrong.',}

//file system
const createNwrite = (path, msg) => fs.writeFile(path, msg.empty)
  .then(console.log(msg.createNwrite))
  .catch(error => console.log(msg.error))




//main
const main = async(path, msg) => {
  createNwrite(path, msg)
}

main(path, message)