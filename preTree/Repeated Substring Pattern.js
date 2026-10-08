
const helperTime = require('../helper')


let s = "abababababababababababababababababab"


var repeatedSubstringPattern = function(s) {
    for(let i = 0; i<s.length;i++){
        if(s.length%i === 0){
            let times = s.length/i;
            let str = s.substring(0,i);
            let newStr = ""
            for(let j = 0; j<times;j++){
                newStr+=str;
            }
            if(s === newStr){
                return true;
            }
        }
    }
    return false
};


var repeatedSubstringPattern1 = function(s) {
    for(let i = Math.floor( s.length/2); i>=1;i--){
        if(s.length%i === 0){
            let times = s.length/i;
            let str = s.substring(0,i);
            let newStr = ""
            for(let j = 0; j<times;j++){
                newStr+=str;
            }
            if(s === newStr){
                return true;
            }
        }
    }
    return false
};

console.log(repeatedSubstringPattern(s));
helperTime(repeatedSubstringPattern,s)
helperTime(repeatedSubstringPattern1,s)
