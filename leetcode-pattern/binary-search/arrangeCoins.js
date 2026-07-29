let n = 3;

// 4 5

var arrangeCoins = function (n) {
  let left = 1,
    right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let coins_needed = (mid * (mid + 1)) / 2;
    if (coins_needed == n) return mid;
    else if (coins_needed < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log("====================================");
console.log("", arrangeCoins(n));
console.log("====================================");
