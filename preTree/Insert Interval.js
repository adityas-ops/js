let intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];

function isContain(arr1, arr2) {
  const min = arr2[0];
  const max = arr2[1];
  return arr1.some((element) => element >= min && element <= max);
}

var insert = function (intervals, newInterval) {
    if(intervals.length === 0) return newInterval
  let ans = [];
  let helper = [];
  for (let i = 0; i < intervals.length; i++) {
    let temp = intervals[i];

    if (isContain(temp, newInterval) === false) {
      if (helper.length > 0) {
        ans.push(helper);
      }
      ans.push(temp);
      helper = [];
    } else {
      helper[0] = Math.min(...temp, ...newInterval, ...helper);
      helper[1] = Math.max(...temp, ...newInterval, ...helper);
    }
  }
  if (helper.length > 0) {
    ans.push(helper);
  }
  return ans;
};

console.log("====================================");
console.log(insert(intervals, newInterval));
console.log("====================================");
