const measureTime = require("../../helper");
// let code = [10,5,7,7,3,2,10,3,6,9,1,6]
// let k = -4

// let code = [2,4,9,3];
let code = Array.from({length: 100000}, () => Math.random() * 100 - 50);
let k = -2

var decrypt = function (code, k) {
  if (k === 0) {
    for (let i = 0; i < code.length; i++) {
      code[i] = 0;
    }
    return code;
  } else if (k > 0) {
    let ans = [];
    for(let i = 0;i<code.length;i++){
        let sum = 0;
        for(let j=i+1;j<i+k+1;j++){
            let idx = j%code.length;
            sum+=code[idx];
        }
        ans.push(sum)
        sum = 0;
    }
    return ans;
  }else{
    let ans = [];
    let idx = Math.abs(k);
    for(let i = 0; i<code.length;i++){
        let sum = 0;      
         let min = (i+(code.length-idx))%code.length;
        //  console.log("mini",min)
        //  console.log("max",min+idx)
        for(let j = min;j<min+idx;j++){
            let c = j%code.length
            sum+=code[c]
        }
        ans.push(sum)
        sum = 0;
    }
    return ans;
  }
};


//  2,4,9,3 2,4,9,3 2,4,9,3
// optimise
var decrypt1 = function (code, k) {
  if (k === 0) {
    for (let i = 0; i < code.length; i++) {
      code[i] = 0;
    }
    return code;
  } else if (k > 0) {
    let ans = [];
    let i = 1;
    let j = 1;
    let sum = 0;
    while(j<code.length+k){
         let idx = j%code.length
        //  console.log('idx',idx)
        sum+=code[idx]
        // console.log("sum",sum)

        if(j<k){
            j++;
        }
       else{
         ans.push(sum);
        sum = sum-code[i]
        i++;
        j++;
       }
    }
    return ans;
} else {
    let ans = [];
    let w = Math.abs(k);
    let n = code.length;
    let sum = 0;

    for (let i = n - w; i < n; i++) {
        sum += code[i];
    }
    for (let i = 0; i < n; i++) {
        ans.push(sum);
        sum = sum - code[(i - w + n) % n] + code[i];
    }

    return ans;
}

}

// console.log(decrypt(code, k));
// console.log(decrypt1(code,k))

measureTime(decrypt,code,k)
measureTime(decrypt1,code,k)
