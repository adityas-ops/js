
let s = "239537672423884969653287101"

// 3 5 4 2 7 
// 35 54 42 27
// 354 542 427
// 3542 5427
// 35427




function subString(s){
let arr = []
for(let i = 0; i<s.length;i++){
   
    for(let j = i; j<s.length;j++){
        let a =''
        for(let k = i; k<=j;k++){
                a+=s[k]
        }
         arr.push(a);
          a = ''
      
    }
     
}
// console.log('arr in sub strig function',arr)
return arr;
}


var largestOddNumber = function(num) {
    if(num.length === 0) return "";
    let arr = subString(num)
   
    let max =  "";
    for(let i = 0; i<arr.length;i++){
        console.log(Number(arr[i]))
        console.log(arr[i])
        if(Number(arr[i])%2 === 1){
              console.log(Number(arr[i]))
            if(Number(max) < Number(arr[i])){
                max = arr[i]
            }
        }
    }
    return max;
};




console.log(largestOddNumber(s))