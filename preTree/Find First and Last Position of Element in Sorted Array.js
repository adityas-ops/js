let nums = [], target = 0

function FLOccur(arr, target,isFirst) {
  let start = 0;
  let last = arr.length - 1;
  let res = -1;

  while (start <= last) {
    let mid = start + Math.floor((last - start) / 2);
    if (arr[mid] === target) {
      res = mid;
      isFirst ? (last = mid - 1) : (start = mid + 1);
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
}



var searchRange = function (nums, target) {
   return [FLOccur(nums,target,true),FLOccur(nums,target,false)]
    
};

console.log('====================================');
console.log(searchRange(nums,target));
console.log('====================================');
