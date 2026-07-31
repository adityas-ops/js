
let arr = [11,12,15,18,2,5,6,8]
let target = 15;


// 

// first need to find the index of minimum number 
//  this index tell us that how many time array is rotated 
// 
function checkNuRotated1(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > arr[end]) {
      // Pivot (minimum) is in the RIGHT half
      start = mid + 1;
    } else {
      // Pivot is in the LEFT half (including mid)
      end = mid;
    }
  }

  return start; // start === end === index of minimum
}

function binarySearch(arr, start,end,target){
    while(start <= end){
        let mid = start+ Math.floor((end-start)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] < target){
            start = mid+1;
        }else{
            end  = mid-1;
        }
    }
    return -1;
}

function FindElement(arr,target){
    let idx = checkNuRotated1(arr)
    let firstHalf = binarySearch(arr,0,idx-1,target);
    let secondHalf = binarySearch(arr,idx, arr.length, target)
    return (firstHalf !== -1 && secondHalf === -1) ? firstHalf : (firstHalf === -1 && secondHalf !== -1) ? secondHalf : -1;
}

console.log(FindElement(arr, target))