
let nums = [1]

var leftRightDifference = function(nums) {
    let leftSum = []
    let rightSum  = []
    let ans = []
    leftSum.push(0);
    rightSum.push(0);
    for(let i =1;i<nums.length;i++){
        leftSum.push(leftSum[leftSum.length-1]+nums[i-1])
    }
    for(let i = nums.length; i>1;i--){
        rightSum.push(rightSum[rightSum.length-1]+nums[i-1])
    }
    rightSum.reverse()
    for(let i = 0; i<leftSum.length;i++){
        ans.push(Math.abs(leftSum[i]-rightSum[i]))
    }
    return ans;
};

console.log(leftRightDifference(nums))