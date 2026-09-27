let nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDuplicates = function (nums) {
  let ans = [];
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    mp[nums[i]] = (mp[nums[i]] || 0) + 1;
  }

  for(const [key,value] of Object.entries(mp)){
    if(value >1){
        ans.push(parseInt(key))
    }
  }
  return ans;
};

console.log("====================================");
console.log(findDuplicates(nums));
console.log("====================================");
