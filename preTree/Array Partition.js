
let nums = [1,4,3,2]


var arrayPairSum = function(nums) {
    let sum = 0;
    nums = nums.sort((a,b)=>a-b)
    for(let i =0; i<nums.length-1;i+=2){
        let m = Math.min(nums[i],nums[i+1])
        sum+=m;
    }
    return sum;
};

console.log(arrayPairSum(nums))