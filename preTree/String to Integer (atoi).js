
let s = " -42"


var myAtoi = function(s) {
    let INT_MAX = 2 ** 31 -1
    let INT_MIN = -(2**31)
    let sign = 1;
    let result = 0;
    let i = 0;
    let n = s.length;
    // remove white space 
    while(i<n && s[i] === ' '){
        i++;
    }
    // find sign
    if(i < n && (s[i] === "-" || s[i] === "+")){
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    // numbers until any others found 
    while(i<n && s[i] >= '0' && s[i] <= '9'){
        const digit = s.charCodeAt(i) - 48;
          if (result > Math.floor(INT_MAX / 10) ||(result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = result*10+digit;
        i++;
    }
     return result === 0 ? 0 : sign * result;
};

console.log('====================================');
console.log(myAtoi(s));
console.log('====================================');