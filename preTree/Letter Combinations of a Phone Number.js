
let digits = "23";


var letterCombinations = function(digits) {
    let mp = {
        "2":['a','b','c'],
        "3":['d','e','f'],
        "4":['g','h','i'],
        "5":['j','k','l'],
        "6":['m','n','o'],
        "7":['p','q','r','s'],
        "8":['t','u','v'],
        "9":['w','x','y','z']
    }
    let ans = [];
    if(digits.length === 0) return ans;
    if(digits.length === 1) return mp[digits]
    let p1 = letterCombinations(digits.substring(0,1));
    let p2 = letterCombinations(digits.substring(1,digits.length))
    for(let i = 0; i<p1.length;i++){
        for(let j = 0; j<p2.length;j++){
            ans.push(p1[i]+p2[j])
        }
    }
    return ans;
};

console.log(letterCombinations(digits))