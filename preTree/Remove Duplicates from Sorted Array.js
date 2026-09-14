
const measureTime = require('../helper')

let  nums =[1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3]
let  nums1 =[1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3]
let  nums2 =[1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3]

// with new variable treat as stack
var removeDuplicates = function(nums) {
    let ans = [];
    let iLength = nums.length;
    for(let i = 0; i<nums.length;i++){
        if(ans[ans.length-1] !== nums[i]){
            ans.push(nums[i])
        }
    }
    for(let i = 0; i<ans.length;i++){
        nums[i] = ans[i]
    }
   if(nums.length > ans.length){
       for(let i = ans.length;i<iLength;i++){
     nums[i] =0
   }
   }
   return ans.length
};


function removeDuplicates1(nums){
    let mp = new Map()
    for(let i = 0; i<nums.length;i++){
        mp.set(nums[i], (mp.get(nums[i])||0 )+1)
    }

    let keys = [...mp.keys()]
    for(const i in keys){
        nums[i] = keys[i]
    }
    for(let i = keys.length;i<nums.length;i++){
        nums[i] = 0;
    }
    return keys.length
}

function removeDuplicates2(nums){
    let index = 0;
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0; i<nums.length;i++){
        if(nums[i] !== nums[i+1]){
            nums[index] = nums[i]
            index++;
        }
    }
    return index;
}

console.log(removeDuplicates1(nums1))
console.log(removeDuplicates2(nums2))

measureTime(removeDuplicates,nums)
measureTime(removeDuplicates1,nums1)
measureTime(removeDuplicates2,nums2)
