
let nums = [3,2,2,3], val = 3;
let nums1 = [3,2,2,3], val1 = 3;


var removeElement = function(nums, val) {
    let ans = [];
    for(let i = 0; i<nums.length;i++){
        if(nums[i] !== val){
            ans.push(nums[i])
        }
    }
    for(let i =0; i<ans.length;i++){
        nums[i] = ans[i];
    }
   if(nums.length > ans.length){
     for(let i = ans.length;i<nums.length;i++){
        nums[i] = 0;
    }
   }
   return ans.length
};

// without using space 
var removeElement1 = function(nums, val) {
    let index = 0;
    for(let i = 0; i<nums.length;i++){

        if(nums[i] !== val){
            nums[index] = nums[i];
            index++;
        }
    }
    return index
};


console.log(removeElement(nums,val))
console.log(removeElement1(nums1,val1))