let trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]];

var findEquation = function (p1, p2, p3) {
  let x1 = p1[0], y1 = p1[1];
  let x2 = p2[0], y2 = p2[1];
  let x3 = p3[0], y3 = p3[1];
  return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
};

var outerTrees = function (trees) {
  trees.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let upper = [];
  let lower = [];

  for (const curr of trees) {
    while (lower.length >= 2 && findEquation(lower[lower.length - 2], lower[lower.length - 1], curr) < 0) {
      lower.pop(); 
    }
    lower.push(curr);
    while (upper.length >= 2 && findEquation(upper[upper.length - 2], upper[upper.length - 1], curr) > 0) {
      upper.pop(); 
    }
    upper.push(curr);
  }

  const seen = new Set();
  const result = [];
  for (const p of [...lower, ...upper]) {
    const key = p[0] + ',' + p[1];
    if (!seen.has(key)) {
      seen.add(key);
      result.push(p);
    }
  }
  return result;
};

console.log(outerTrees(trees));
// Output: [[1,1],[2,0],[4,2],[3,3],[2,4]]