
let arr = [0,1,0,3,12];

function moveZeroes(nums) {
    let insert = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums[i] !== 0){
            [nums[insert],nums[i]] = [nums[i],nums[insert]]
            insert++;
        }
            
    }
    return nums;
}


console.log('====================================');
console.log(moveZeroes(arr));
console.log('====================================');