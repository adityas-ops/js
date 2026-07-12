// ===== Your main file =====
const measureTime = require("../../helper"); // ✅ correct path

let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 5;

// Create large array with 100,000 elements
// let arr = Array.from({length: 100000}, () => Math.random() * 100 - 50);
// let k = 1000;

function helper(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return arr[i];
    }
  }
  return 0;
}

function printFirstNegative1(arr, k) {
  let ans = [];
  let i = 0;
  let j = 0;
  let temp = [];
  while (j < arr.length) {
    temp.push(arr[j]);
    if (j - i + 1 < k) {
      j++;
    } else {
      let t = helper(temp);
      ans.push(t);
      temp.shift();
      j++;
      i++;
    }
  }
  return ans;
}

function printFirstNegative2(arr, k) {
  let ans = [];
  let negQueue = [];
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] < 0) {
      negQueue.push(j);
    }

    if (j - i + 1 < k) {
      j++;
    } else {
      if (negQueue.length === 0) {
        ans.push(0);
      } else {
        ans.push(arr[negQueue[0]]);
      }

      if (negQueue[0] === i) {
        negQueue.shift();
      }

      i++;
      j++;
    }
  }
  return ans;
}

// ✅ Call AFTER function is defined
measureTime(printFirstNegative1, arr, k);
measureTime(printFirstNegative2, arr, k);