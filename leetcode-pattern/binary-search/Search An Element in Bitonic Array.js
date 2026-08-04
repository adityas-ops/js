
let arr = [1,3,8,12,4,2]
let key = 1



function PeakIndex(arr){
    if(arr.length === 0 || !arr) return -1;
    if(arr.length === 1) return 0;
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = start+ Math.floor((end-start)/2);
        let leftVal  = mid > 0              ? arr[mid - 1] : -Infinity;
        let rightVal = mid < arr.length - 1 ? arr[mid + 1] : -Infinity;
        if(leftVal < arr[mid] && arr[mid] > rightVal) return mid;
        else if(leftVal > arr[mid]){
            end = mid-1;
        }else{
            start = mid+1;

        }
    }
    return -1;
}

// 1,2,3,4,5,6,7
// key 3

function binarySearch(start, end, arr, key, isIncrease) {
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === key) return mid;
        else if (arr[mid] > key) {
            isIncrease ? end = mid - 1 : start = mid + 1;
        }
        else {
            isIncrease ? start = mid + 1 : end = mid - 1;
        }
    }
    return -1;
}



function findIndexBio(arr,key){
    let peakIdx = PeakIndex(arr)
    let p1 = binarySearch(0,peakIdx,arr,key,true)
    let p2 = binarySearch(peakIdx+1,arr.length-1,arr,key,false)
    return (p1 === -1 && p2 === -1) ? -1 : p1 === -1 && p2 !== -1 ? p2 :p1
}


console.log(findIndexBio(arr,key));
