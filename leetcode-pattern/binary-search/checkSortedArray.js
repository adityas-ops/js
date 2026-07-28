let arr = [1, 2, 3, 4, 5, 6];

function checkAssendingOrder(arr) {
  if (arr.length < 2) return true;
  let first = arr[0];
  let second = arr[1];
  return second >= first ? true : false;
}

console.log(checkAssendingOrder(arr));
