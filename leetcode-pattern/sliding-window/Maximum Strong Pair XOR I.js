
let nums = [1,2,3,4,5];

var maximumStrongPairXor = function(nums) {
    let maxi = -Infinity;
    for(let i = 0; i<nums.length;i++){
        for(let j =i;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j]) <= Math.min(nums[i],nums[j])){
                let m = nums[i]^nums[j];
                maxi = Math.max(m,maxi)

            }
        }
    }
    return maxi
};

console.log(maximumStrongPairXor(nums))