
let arr = [-2,1,-3,4,-1,2,1,-5,4];


function maxSubArray(nums) {
    let cur = nums[0];
    let  best = nums[0];
    for(let i = 0; i< nums.length;i++){
        cur = Math.max(nums[i], cur+nums[i]);
        best = Math.max(best, cur)
    }
    return best;
}

console.log('====================================');
console.log(maxSubArray(arr));
console.log('====================================');