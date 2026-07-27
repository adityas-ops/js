
const measuretime = require("../../helper")

let n = 1099511627776
// let n = 64

// by me
var isPowerOfFour = function(n) {
    if (n === 1) return true
    while(n>4){
        n = n/4;
      

    }
    return n === 4 ? true :false
};


var isPowerOfFour1 = function(n) {
    if(n === 1) return true;
    let po =Math.floor( Math.log(n)/Math.log(4))
     let check = Math.pow(4,po)

      return check === n ? true:false
}

var isPowerOfFour2 = function(n) {
  if(n === 1) return true;
   n = n-1;
   return n%3 === 0 ? true:false
}


console.log(isPowerOfFour(n))
console.log(isPowerOfFour1(n))
console.log(isPowerOfFour2(n))

measuretime(isPowerOfFour,n)
measuretime(isPowerOfFour1,n)
measuretime(isPowerOfFour2,n)
