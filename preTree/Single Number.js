
let nums = [2,2,1];

var singleNumber = function(nums) {
   let mp = {};
   for(let i = 0; i<nums.length;i++){
      mp[nums[i]] = ( mp[nums[i]] || 0 )+1; 
   }
   for(const [key,value] of Object.entries(mp)){
    if(value === 1) return Number(key)
   }
};

var singleNumber1 = function(nums) {
    let ans = 0;
    for(let i = 0; i<nums.length;i++){
        ans = ans^nums[i];
    }
    return ans;
};

console.log(singleNumber(nums))
console.log(singleNumber1(nums));
