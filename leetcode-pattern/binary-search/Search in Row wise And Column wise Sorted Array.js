
let arr = [[10,20,30,40],[15,25,35,45],[27,29,37,48],[32,33,39,50]]

// console.log(arr[4][0]);


function searchSortedMatrix(arr, key) {
    if (!arr || arr.length === 0) return [-1, -1];

    let row = 0;
    let col = arr[0].length - 1; // Start top-right

    while (row < arr.length && col >= 0) {
        if (arr[row][col] === key) {
            return [row, col]; // ✅ Found
        } else if (arr[row][col] > key) {
            col--; // Move left (eliminate this column)
        } else {
            row++; // Move down (eliminate this row)
        }
    }

    return [-1, -1]; // Not found
}

console.log(searchSortedMatrix(arr,29));
