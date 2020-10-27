function contenedora() { crash() }

function crash() { return 3 + z }

function contenedoraAsincrona() {
  setTimeout(() => { crash() }, 1000)
}

try {
  contenedoraAsincrona()
} catch(err) {
  console.error('error en crash')
  console.error(err.message)
  console.log('pero podemos seguir')
}