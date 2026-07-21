let arr = [3, 1, 4, 1, 5, 9, 2, 6];
let l = 1;
let r = 5;

function findSumRange(l, r, arr) {
  if (l < 1 || r > arr.length || l > arr.length || r < 1 || l > r)
    return "please enter valid range";
  let prefixSum = [];
  prefixSum.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + arr[i]);
  }
  return prefixSum[r] - prefixSum[l - 1];
}

let arr2 = [1, 1, 2, 3, 3, 2, 0, 1, 1];
let k = 2;
function countSubArrayWithSumK(arr, k) {
  let count = 0;
  let prefix = 0;
  let mp = { 0: 1 };
  for (let i of arr) {
    prefix += i;
    let need = prefix - k;
    if (Object.hasOwn(mp, need)) {
      count += mp[need];
    }
    mp[prefix] = (mp[prefix] || 0) + 1;
  }
  return count;
}

// console.log(findSumRange(l,r,arr))
console.log(countSubArrayWithSumK(arr2, k));
