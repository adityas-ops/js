

let  n = 3, s = 7, m = 7


var maxValue = function(n, s, m) {
    
    let ups = Math.floor(n / 2);
    let downs = Math.floor((n - 1) / 2);
    
     if(n % 2 === 1) {
        // Ends on DOWN, max is at last UP step
        return s + (ups * m) - (downs - 1);
    } else {
        // Ends on UP, max is at end
        return s + (ups * m) - downs;
    }
};

// var maxValue = function(n, s, m) {
//     let result = s;
//     let max = s;
//     let goingUp = true;
    
//     for(let i = 1; i < n; i++) {
       
//         if(goingUp) {
//             result += m;  // Go UP by m
//         } else {
//             result -= 1;  // Go DOWN by 1
//         }
//         max = Math.max(max, result);
//         goingUp = !goingUp;  // Alternate direction
//          console.log('max',max)
//     }
    
//     return max;
// };

console.log(maxValue(n,s,m))