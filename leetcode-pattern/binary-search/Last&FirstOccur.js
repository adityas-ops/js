let arr = [1, 2, 3, 4, 4, 4,6, 7, 9];
let target = 4;

console.log('ar',arr.slice(0,4))

function searchFirstOccurance(arr, target) {
    let start = 0;
    let last = arr.length-1;
    let res = -1;
    while(start <= last){
        let mid = start+Math.floor((last-start)/2)
        if(arr[mid] === target){
            res = mid;
           last = mid-1;
        }else if(arr[mid] > target){
            last = mid-1;
        }else {
            start=mid+1;
        }
    }
    return res;
}

function searchLastOccurance(arr, target) {
    let start = 0;
    let last = arr.length-1;
    let res = -1; 
    while(start <= last){
        let mid = start+Math.floor((last-start)/2)
        if(arr[mid] === target){
            res = mid;
           start = mid+1;
        }else if(arr[mid] > target){
            last = mid-1;
        }else {
            start=mid+1;
        }
    }
    return res;
}

console.log(searchFirstOccurance(arr, target));
console.log(searchLastOccurance(arr,target))
