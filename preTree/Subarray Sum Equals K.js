let nums = [-1, 1],
  k = 0;

var subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  let mp = new Map();
  mp.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result += mp.get(sum - k) || 0;
    mp.set(sum, (mp.get(sum) || 0) + 1);
  }
  return result;
};

console.log(subarraySum(nums,k));
