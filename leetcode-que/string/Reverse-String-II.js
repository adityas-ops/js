
// let s = "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl"
let s = 'abcdefg';

// let arr = s.match(/.{1,3}/g)
// console.log(arr)
// let ss = arr.join('')
// console.log(ss)


var reverseStr = function(s, k) {
    if(s.length <= 0){
        return s;
    }
    // if()
    let arr = [];
    for(let i = 0; i<s.length;i+=k){
        // let m = s[i]+(s[i+1] === undefined ? '':s[i+1]);
        let n = '';
        for(let m = i; m<k+i;m++){
            n = n + (s[m] === undefined ? '':s[m]) 
        }
        arr.push(n)
    }
     
    // console.log(arr)
    for(let i = 0; i<arr.length;i+=2){
        arr[i] = arr[i].split('').reverse().join('')
    }

    // console.log(arr)
    return arr.join('')
};

console.log(reverseStr(s,4))