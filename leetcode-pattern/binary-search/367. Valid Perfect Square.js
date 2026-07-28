
const measureTime = require("../../helper")

let num = 16;

var isPerfectSquare = function (num) {
  let count = 0;
  let i = 1;
  while (num > 0) {
    num = num - i;
    // console.log("num", num);
    count++;
    i = i + 2;
  }
  return num === 0 ? true : false;
};

100;
25;

var isPerfectSquare1 = function (num) {
   if(num === 1) return true;
   let check = Math.floor(num / 2);
  let start = 1;
  let end = check;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid * mid === num) return true;
    else if (mid * mid < num) {
      start = mid + 1;
    }else{
        end = mid-1;
    }
  }
  return false;
};

console.log(isPerfectSquare(num));
console.log(isPerfectSquare1(num))

measureTime(isPerfectSquare,num)
measureTime(isPerfectSquare1,num)