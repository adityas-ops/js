
// function curying
function Add(a){
  return function(b){
       return a+b
    }
}

let Add5 = Add(5)
let Add10 = Add(10)
console.log(Add5(3))
console.log(Add10(3))