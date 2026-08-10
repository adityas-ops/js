let arr = [100, 80, 60, 70, 60, 75, 85];

//  for specific day before consective smaller or equal (before it) include current day
//  like day 6 => day 6 : -   60,70,60,75
// day 1 => 100;
// day 2 = 80;

// so we can find nearest left greater and then subtract with day and 1
//  like for 75 => day 6 nearest greater is 1 (80) place => day-1 - index = 6-1-1 = 4 so 4 is the answer

function nearestLeftGreater(arr, key) {
    // console.log('key',key)
    // console.log('arr',arr)
  let stack = [];
  let idx = -1;
  for (let i = 0; i < arr.length; i++) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1][0] &&
      stack[stack.length - 1][0] < key &&
      stack[stack.length - 1] !== undefined
    ) {
      stack.pop();
    }
    let top =
      stack[stack.length - 1] !== undefined ? stack[stack.length - 1] : [-1,-1];
    //   console.log('top',top)
    idx = top[1];
    stack.push([arr[i], i]);
  }
  console.log('idx',idx)
  return idx;
}

function findSmallerConsective(arr, day) {
  if (day === 0 || day > arr.length) return -1;
  let idx = nearestLeftGreater(arr.slice(0, day - 1), arr[day - 1]);
  if (idx === -1 || idx === undefined) return -1;

  return day - idx - 1;
}

console.log("ans", findSmallerConsective(arr, 2));
