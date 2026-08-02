
let arr = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1];

// find the first index of the 1 where occur 


function findOne(arr){
    let low = 0;
    let high = 1;
    while(arr[high] < 1){
        low = high;
        high = 2*high;
    }
//    now find one with first occur i have already low and high
  let res = low;
  while(low <= high){
    let mid = low + Math.floor((high-low)/2);
    if(arr[mid] === 1){
        res = mid;
        high = mid-1;
    }else if(arr[mid] < 1){
        low = mid+1;
    }else{
        high = mid-1;
    }
  }
  return res;
}

console.log('====================================');
console.log(findOne(arr));
console.log('====================================');