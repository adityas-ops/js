let nums = [2, 0, 1];
let nums1 = [2,0,1]

var sortColors = function (nums) {
  let idx0 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[idx0], nums[i]] = [nums[i], nums[idx0]];
      idx0++;
    }
  }
  for (let i = idx0; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[idx0], nums[i]] = [nums[i], nums[idx0]];
      idx0++;
    }
  }
};

// using 3 variable
var sortColors1 = function (nums) {
    let n = nums.length;
    let i = 0, j= 0, k = n-1;
    while(j<=k){
        if(nums[j] === 1){
            j++;
        }
        else if(nums[j] === 2){
            [nums[j],nums[k]] =  [nums[k],nums[j]]
            k--;
        }else{
            [nums[j],nums[i]] =  [nums[i],nums[j]]
            i++;
            j++;
        }
    }
};

console.log("nums", nums);
console.log(sortColors(nums));
sortColors1(nums1)
console.log("nums", nums);
console.log("nums1", nums1);