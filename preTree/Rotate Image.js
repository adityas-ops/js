
let  matrix = [[1,2,3],[4,5,6],[7,8,9]];
let  matrix1 = [[1,2,3],[4,5,6],[7,8,9]];

function printMatrix(matrix){
    let dupmatrix =Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i = 0; i<m;i++){
        for(let j = 0; j<n;j++){
            dupmatrix[i][j] = matrix[j][i];
  
        }
 
    }
    for(let i = 0; i< dupmatrix.length;i++){
    dupmatrix[i] = dupmatrix[i].reverse()
}
       for(let i = 0; i<m;i++){
        for(let j = 0; j<n;j++){
            matrix[i][j] = dupmatrix[i][j]
  
        }
 
    }
    
}


printMatrix(matrix)
console.log('matrix',matrix)

// method 2 without using space
var rotate = function(matrix) {
    let n = matrix.length;
    for(let i = 0; i<n;i++){
        for(let j = i; j<n;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    for(let i = 0; i<n;i++){
        matrix[i] = matrix[i].reverse()
    }
}

rotate(matrix1)
console.log('matrix1',matrix1)
