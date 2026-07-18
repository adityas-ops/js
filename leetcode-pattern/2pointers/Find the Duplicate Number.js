

let nums =[1,3,4,2,3]

// use bit
// var findDuplicate = function(nums) {
//     nums.sort((a,b)=>a-b)
//    for(let i = 0; i<nums.length-1;i++){
//     if((nums[i]^nums[i+1]) === 0) return nums[i]
//    }
//    return -1
// };

// use map

var findDuplicate = function(nums) {
   let mp = {};
   for(let i in nums){
    mp[nums[i]] = (mp[nums[i]] ||0)+1;
   }
  for (const [key, value] of Object.entries(mp)) {
   if(value >1) return key
}
};


console.log(findDuplicate(nums))