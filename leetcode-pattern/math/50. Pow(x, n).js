

Input: x = 2.0, n = -1

// Output: 1024.00000
// brute force
// var myPow = function(x, n) {
//     if( n === 1) return x;
//     if(n === 0) return 1;
//     if(n>0) return Number(x * myPow(x,n-1)).toFixed(5)
//     if(n<0) return Number(1/(x * myPow(x,Math.abs(n)-1))).toFixed(5)

     
// };

// 2nd brute force 

var myPow = function(x, n) {
    let result;
    
    if(n === 0) return 1;
    if(n === 1) return x;
    if(n < 0) {
        n = Math.abs(n);
        result = 1 / recursivePow(x, n);
    } else {
        result = recursivePow(x, n);
    }
    
    return Number(result.toFixed(5));
};

function recursivePow(x, n) {
    if(n === 1) return x;
    if(n === 0) return 1;
    if(n % 2 === 0) {
        let half = recursivePow(x, n / 2);
        return half * half;
    } else {
        return x * recursivePow(x, n - 1);
    }
}


console.log(myPow(x,n))