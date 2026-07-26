
n = 19


//  at the end the count of squre is the place where bulb will be on so the probelm is convert from on/off bulb to count squre number

function isPerfectSquare(num) {
    if (num < 0) return false;
    return Number.isInteger(Math.sqrt(num));
}
var bulbSwitch = function(n) {
   let count = 0;
   for(let i = 1; i<=n;i++){
     if(isPerfectSquare(i)){
        count++;
     }
   }
   return count
};


function isPerfectSquare1(num) {
    if (num === 0) return 0
    return Math.floor(Math.sqrt(num))
}



console.log(bulbSwitch(n))
console.log(isPerfectSquare1(n))