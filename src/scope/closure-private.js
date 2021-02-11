'use strict'
const person = () => {
  let saveName = "Enter a name";
  return {
    getname: () => {
      return saveName;
    },
    setname: (name) => {
      saveName = name
    }
  }
}

const user = person();
console.log(user.getname());

user.setname('Adrian');
console.log(user.getname());

console.log(user.saveName); // no podemos acceder a esta varable 
