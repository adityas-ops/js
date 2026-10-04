let nums = [7,8,9,11,12]

var firstMissingPositive = function (nums) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
  }
  let arr = [...mp.keys()].sort((a, b) => a - b);
  let minIdx = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      minIdx = i;
      break;
    }
  }
  arr = minIdx === -1 ? arr : arr.slice(minIdx, arr.length);

  if (arr[0] !== 1) return 1;

  let mini = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      mini = arr[i] + 1;
      break;
    }
  }

  mini = mini === -1 ? arr[arr.length - 1] + 1 : mini;
  return mini;
};

console.log(firstMissingPositive(nums));
