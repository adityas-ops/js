const measureTime = require('../../helper')

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3];


var removeDuplicates = function (nums) {
  let i = 0; 
  let j = 0; 

  while (j < nums.length) {
    let count = 1;

    while (j + count < nums.length && nums[j] === nums[j + count]) {
      count++;
    }

    // write at most 2
    let times = Math.min(count, 2);
    for (let t = 0; t < times; t++) {
      nums[i] = nums[j];
      i++;
    }

    j += count; 
  }
  for (let k = i; k < nums.length; k++) {
    nums[k] = "_";
  }

//   console.log("nums", nums);
  return i;
};


var removeDuplicates2 = function (nums) {
  let i = 0; // write pointer

  for (let j = 0; j < nums.length; j++) {
    // Allow element if it's different from the one 2 positions back
    if (i < 2 || nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }

  // Fill the rest with "_"
  for (let k = i; k < nums.length; k++) {
    nums[k] = "_";
  }

//   console.log("nums", nums);
  return i; // count of valid numbers
};


// console.log("count:", removeDuplicates(nums));

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3,0, 0, 1, 1, 1, 1, 2, 3, 3];

// console.log("count:", removeDuplicates2(nums2));

measureTime(removeDuplicates,nums)
measureTime(removeDuplicates2,nums2)
