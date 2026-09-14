
let nums = [1,0,1,1,0,1]

var findMaxConsecutiveOnes = function(nums) {
    let maxi = 0;
    let countOne = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums[i] === 1){
            countOne++;
            maxi = Math.max(maxi,countOne);  
        }else{
            countOne = 0;
        }
    }
    return maxi;
}

console.log('====================================');
console.log(findMaxConsecutiveOnes(nums));
console.log('====================================');