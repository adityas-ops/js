let x = 8;

var mySqrt = function (x) {
  if (x === 1) return x;
  let num = Math.floor(x / 2);
  let start = 1;
  let end = num;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

console.log(mySqrt(x));
