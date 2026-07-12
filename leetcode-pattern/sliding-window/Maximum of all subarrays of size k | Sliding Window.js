let arr = [1, 3, 1, 2, 0, 5]
let k = 3;


// let arr = Array.from({length: 100}, () => Math.random() * 100 - 50);
// let k = 10;

// idx = 1;

const measureTime = require("../../helper");
// ans -> [3,3,5,5,6,7]

function maxSubArr(arr, k) {
  let ans = [];
  let i = 0;
  let j = 0;
  let dequee = [];
  while (j < arr.length) {
    dequee.push(arr[j]);
    if (j - i + 1 < k) {
      j++;
    } else {
      let maxi = Math.max(...dequee);
      ans.push(maxi);
      dequee.shift();
      i++;
      j++;
    }
  }
  return ans;
}

function maxSubArr2(arr, k) {
  let ans = [];
  let deque = []; // stores INDICES, not values
  let i = 0, j = 0;

  while (j < arr.length) {
    console.log(`dequee at ${j}`,deque)
    // Remove elements outside window
    if (deque.length > 0 && deque[0] < i) {
      deque.shift();
    }

    // Remove smaller elements from back
    // (they'll never be max while current element is in window)
    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[j]) {
      deque.pop();
    }

    deque.push(j);

    if (j - i + 1 < k) {
      j++;
    } else {
      // Front of deque is max of current window
      ans.push(arr[deque[0]]);
      i++;
      j++;
    }
  }
  return ans;
}

// console.log(maxSubArr(arr, k));
console.log(maxSubArr2(arr, k));
measureTime(maxSubArr, arr, k);
measureTime(maxSubArr2, arr, k);
