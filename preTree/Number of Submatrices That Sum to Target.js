let matrix = [[1,-1],[-1,1]], target = 0

var numSubmatrixSumTarget = function (matrix, target) {
  let result = 0;
//   let sum = 0;
  let mp = new Map();
  mp.set(0, 1);
  for(let i = 0; i<matrix.length;i++){
    let sum = 0;
    for(let j = 0; j<matrix[0].length;j++){
        sum+=matrix[i][j];
        result += mp.get(sum - target) || 0;
    mp.set(sum, (mp.get(sum) || 0) + 1);
    }
  }
  return result;
};

console.log(numSubmatrixSumTarget(matrix, target));
