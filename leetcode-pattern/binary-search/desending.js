let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let target = 1;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));
