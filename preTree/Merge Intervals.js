let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

var merge = function (intervals) {
  if (intervals.length === 0) return [];
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  let ans = [intervals[0]]; 
  
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = ans[ans.length - 1];
    
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
    
      ans.push(current);
    }
  }
  
  return ans;
};

console.log(merge(intervals));
