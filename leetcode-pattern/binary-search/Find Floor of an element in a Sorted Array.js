const arr = [1, 2, 3, 4, 8, 10, 10, 12, 19];

// Floor → greatest element ≤ target
function findFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1; // -1 = no floor exists (target < all elements)

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) return arr[mid];

    else if (arr[mid] < target) {
      res = arr[mid]; // ✅ valid floor candidate, try to find a bigger one
      start = mid + 1;
    }

    else {
      end = mid - 1; // arr[mid] too big, go left
    }
  }
  return res;
}

// Ceil → smallest element ≥ target
function findCeil(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1; // -1 = no ceil exists (target > all elements)

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) return arr[mid];

    else if (arr[mid] > target) {
      res = arr[mid]; // ✅ valid ceil candidate, try to find a smaller one
      end = mid - 1;
    }

    else {
      start = mid + 1; // arr[mid] too small, go right
    }
  }
  return res;
}

console.log("floor", findFloor(arr, 5));   // 4
console.log("floor", findFloor(arr, 0));   // -1 (no floor)
console.log("ceil",  findCeil(arr, 5));    // 8
console.log("ceil",  findCeil(arr, 100));  // -1 (no ceil) ✅ fixed!