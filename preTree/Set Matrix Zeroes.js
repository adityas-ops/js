let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

var setZeroes1 = function (matrix) {
  let zeroIdx = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIdx.push(i);
        zeroIdx.push(j);
        break;
      }
    }
  }
  // for row zero
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[zeroIdx[0]][i] = 0;
  }
  // for column zero
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][zeroIdx[1]] = 0;
  }
};


function helper(matrix,zeroIdx){
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[zeroIdx[0]][i] = 0;
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][zeroIdx[1]] = 0;
  }
}

var setZeroes = function (matrix) {
  let zeroIdx = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIdx.push([i, j]);
      }
    }
  }
console.log('zero',zeroIdx)
 while(zeroIdx.length >0){
    helper(matrix,zeroIdx[0]);
    zeroIdx.shift()
 }

};



console.log("matrix", matrix);
// setZeroes1(matrix);
setZeroes(matrix)
console.log("matrix after", matrix);
