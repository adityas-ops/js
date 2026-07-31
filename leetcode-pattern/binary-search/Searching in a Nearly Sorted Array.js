

let arr = [5,10,30,20,40]

let target = 40;

function randomBinarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = start + Math.floor((end-start)/2)
        if( arr[mid] === target) return mid;
        else if(mid >= 0 && arr[mid-1] === target ) return mid-1;
        else if(mid <= end && arr[mid+1] === target) return mid+1;
        else if( arr[mid] > target) end = mid-2;
        else start = mid+2;
    }
    return -1;
}

console.log(randomBinarySearch(arr,target))