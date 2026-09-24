let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var spiralOrder = function (matrix) {
  

  let dir = 0;
  //  dir = 0  = top => left to right
  //  dir = 1  = right => top to down
  //  dir = 2  = down => right to left 
  //  dir = 3  = left => down to top
  let ans = [];
  let top = 0;
  let down = matrix.length-1;
  let right = matrix[0].length-1;
  let left = 0
  while(top <= down && left <= right){
    if(dir === 0){
        for(let i = left; i<= right; i++){
            ans.push(matrix[top][i]);
        }
        top++;
    }else if(dir === 1){
        for(let i = top; i<= down; i++){
            ans.push(matrix[i][right])
        }
        right--;
    }else if(dir === 2){
        for(let i = right; i>=left;i--){
            ans.push(matrix[down][i])
        }
        down--;
    }else if(dir ===3){
        for(let i = down; i >= top;i--){
            ans.push(matrix[i][left])
        }
        left++;
    }
    dir++;
    if(dir === 4){
        dir = 0;
    }
  }
  return ans;
};

console.log(spiralOrder(matrix));
