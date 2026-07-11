let arr = [1, 15, 20, 5, 2, 1, 100];
let k = 3;

function MaxSubArraySum(nums, k) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let max = -Infinity;
  let n = nums.length;
  if (k > nums.length) return 0;
  while (j < n) {
    sum += nums[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      max = Math.max(max, sum);
      sum = sum - nums[i];
      j++;
      i++;
    }
  }
  return max;
}

console.log(MaxSubArraySum(arr, 3));
