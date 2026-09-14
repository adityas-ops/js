

let nums = [9,6,4,2,3,5,7,0,1]
var missingNumber = function(nums) {

    let n  = nums.length
    let total = (n*(n+1))/2;
    let sum = nums.reduce((acc,curr)=>acc+curr,0)
    return total-sum;
}

console.log(missingNumber(nums));
