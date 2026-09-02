let arr = [-1,-2,5, 4, 3, 1, 2, 8, 9];

function sorting(arr) {
  if (arr.length == 0) return;

  let temp = arr.pop();
  sorting(arr);
  insert(arr, temp);
}

function insert(arr, temp) {
  if (arr.length === 0 || arr[arr.length - 1] <= temp) {  
    arr.push(temp);
    return;
  }
  let val = arr.pop();
  insert(arr, temp);
  arr.push(val);
  return;
}

sorting(arr);
console.log(arr); // [1, 2, 3, 4, 5, 8, 9]