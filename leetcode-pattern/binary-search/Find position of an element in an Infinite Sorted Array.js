

// find element in infinite sorted array 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

let target = 14;

function findIndex(arr,target){
    let low = 0;
    let high = 1;
    while(arr[high] < target){
        low = high;
        high = 2*high;
    }
    // console.log("low",low)
    // console.log("high",high)
    // now implement binary search
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] < target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1
}

console.log("ans",findIndex(arr,target))