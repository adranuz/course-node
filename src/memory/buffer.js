let abc = Buffer.alloc(26) //obtenemos 26 espacios

for(let i = 0; i < 26; i++) {
  //en computadora las letras empiezan a partir del codigo 97
  abc[i] = i + 97 
}
//obtenemos el buffer pero obtenemos su equivalente en string
console.log(abc.toString())