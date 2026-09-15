

let nums = [1,2,3]

function sumF(nums){
return nums.reduce((acc,curr)=>acc+curr,0)
}

var pivotIndex = function(nums) {
    let sum = sumF(nums)
    for(let i = 0; i<nums.length;i++){
        let dd = sum-nums[i];
        // console.log('dd',dd)
        if(dd%2 === 0){
            let left = sumF(nums.slice(0,i));
            let right = sumF(nums.slice(i+1,nums.length));
            if(left === right) return i;
        }
    }
    return -1
};

console.log(pivotIndex(nums))