

const measureTime = require('../helper')

let nums = [4,5,0,-2,-3,1], k = 5;

// n^3
var subarraysDivByK = function(nums, k) {
    let count = 0;
    for(let i = 0; i<nums.length;i++){
        for(let j = i; j<nums.length;j++){
           let temp = nums.slice(i,j+1);
            let sum = temp.reduce((acc, curr) => acc + curr, 0);
            if(sum%k === 0){
                count++;
            }
        }
      
    }
    return count;
};

// optimize way n^2
var subarraysDivByK1 = function(nums, k) {
   let acumSum = [nums[0]];
   let count = 0
   for(let i =1; i<nums.length;i++){
        acumSum.push(acumSum[acumSum.length-1]+nums[i])
   }
   for(let i = 0; i<nums.length;i++){
    for(let j = i; j<nums.length;j++){
        let isum = acumSum[i-1] === undefined ? 0: acumSum[i-1]
        let sum = acumSum[j]-isum
        if(sum%k === 0){
            count++;
        }
    }
   }
   return count;
};


var subarraysDivByK2 = function(nums, k) {
    let n = nums.length;
    let mp = new Map();
    mp.set(0,1);
    let sum = 0;
    let result = 0;
for (let i = 0; i < n; i++) {
    sum += nums[i];
    let rem = sum % k;
    if (rem < 0) rem += k;

    result += mp.get(rem) || 0;
    mp.set(rem, (mp.get(rem) || 0) + 1);
}
    return result
}

// console.log('result',subarraysDivByK(nums,k))
measureTime(subarraysDivByK,nums,k)
measureTime(subarraysDivByK1,nums,k)
measureTime(subarraysDivByK2,nums,k)

console.log('result',subarraysDivByK2(nums,k))