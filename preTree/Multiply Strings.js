
let num1 = "2", num2 = "3";

function convertDigit(s){
    let result = 0;
    let i = 0;
    while(i<s.length){
        let digit = s.charCodeAt(i) - 48;
        console.log('digit',digit)
        result = result*10+digit
        i++;
    }
    return result;
}

var multiply = function(num1, num2) {
    let n = convertDigit(num1);
    let m = convertDigit(num2)
    console.log('n',n)
     console.log('m',m)
    return n*m
};


var multiply1 = function(num1, num2) {
    let m = num1.length;
    let n = num2.length;
    let res = new Array(m+n).fill(0)
    // console.log('rs',res)
    for(let i = m-1; i>=0;i--){
        for(let j = n-1; j>=0;j--){
            
        }
    }
}

console.log(multiply(num1,num2));
console.log(multiply1(num1,num2));