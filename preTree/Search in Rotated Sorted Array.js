let nums = [1], target = 0

// first find lowest value to know how many times it rotate;

function minVal(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

function binarySearch(nums,start,end,target){
    while(start <=end){
        let mid  = start+Math.floor((end-start)/2);
        if(nums[mid] > target){
            end  = mid-1;
        }else if(nums[mid] < target){
            start = mid+1;
        }else{
            return mid;
        }
    }
    return -1;

}

console.log(minVal(nums));
console.log(binarySearch([1,2,3,4,5,6],0,5,4));

var search = function(nums, target) {
    let part = minVal(nums);
    
    let firstHalf = binarySearch(nums,0,part-1,target);

    let secondHalf = binarySearch(nums,part,nums.length-1,target);


    return (firstHalf !== -1 && secondHalf === -1) ? firstHalf :(firstHalf === -1 && secondHalf !== -1) ?secondHalf:-1

};

console.log('s',search(nums,target));

