const fs = require('fs').promises
const path = __dirname + '/textito.txt'
const message = {
  empty: 'holo',
  createNwrite: 'The file has been created successfully.',
  
  read: 'The file has been read successfully.',
  
  rewrite: 'The file has been rewritten successfully.',
  content: 'Hello how is it going?',
  
  delete: 'The file has been deleted successfully.',

  exists: 'The file exists.',
  notExists: 'The file does not exist.',
  
  error: 'There is something wrong.',}

//file system
const createNwrite = (path, msg) => fs.writeFile(path, msg.empty)
  .then(console.log(msg.createNwrite))
  .catch(error => console.log(msg.error))

const read = (path, msg) => fs.readFile(path)
  .then(console.log(msg.read))
  .then(data => console.log('This was read:', data.toString()))
  .catch(error => console.log(msg.error))

const rewrite = (path, msg) => fs.appendFile(path, msg.content)
  .then(console.log(msg.rewrite))
  .catch(error => console.log(msg.error))

const remove = (path, msg) => fs.unlink(path)
  .then(console.log(msg.delete))
  .catch(error => console.log(msg.error))

const exist = (path, msg) => fs.open(path, 'wx')
  .then(console.log(msg.exists))
  .catch(error => console.log(msg.error))

//main
const main = async(path, msg) => {
  await createNwrite(path, msg)
  await read(path, msg)
  await rewrite(path, msg)
  await read(path, msg)
  await remove(path, msg)
  await exist(path)
}

main(path, message)
