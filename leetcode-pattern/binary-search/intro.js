let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

function findItem(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(findItem(arr, target));
