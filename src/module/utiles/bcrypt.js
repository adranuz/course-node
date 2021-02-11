const bcrypt = require('bcrypt')

const password = 'Password super dificil'

bcrypt.hash(password, 5, function(error, hash) {
  console.log(hash)

  bcrypt.compare(password, hash, function(err, res){
    console.log(res)
  })
})