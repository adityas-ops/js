let nums = [0,1,0,1]

var findMaxLength = function (nums) {
  let sum = 0;
  let mp = new Map();
  mp.set(0, -1);
  let k = 0;
  let maxi = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = -1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log('sum',sum)
     console.log('sum-k',sum-k)
     console.log('mpget',mp.get(sum-k))
    if (mp.has(sum - k)) {
      maxi = Math.max(maxi, i - mp.get(sum - k));
    }else{
         mp.set(sum, i);
    }

   
  }
  console.log('mp',mp)
  return maxi;
};

console.log(findMaxLength(nums));
