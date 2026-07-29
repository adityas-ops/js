

// there are a input which is sorted but a rotated find number of times array is rotated 

// let arr = [2,5,6,8,11,12,15,18];
let arr = [11,12,13,1]

// o(n)
function checkNuRotated(arr){
   
    let pivot = arr[0];
    let idx = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] < pivot){
            pivot = arr[i];
            idx = i;
        }
    }
    return idx
}

// using binary search log(n)

function checkNuRotated1(arr){
    //  let pivot = arr[0];
     let start = 0;
     let end = arr.length-1; 
     let n = arr.length;
     while(start <= end){
           if(arr[start] <= arr[end]){
            return start;
        }   
        let mid = start + Math.floor((end-start)/2)
         if(mid > 0 && arr[mid] < arr[mid - 1]) return mid;
        if(mid < arr.length - 1 && arr[mid] > arr[mid + 1]) return mid + 1;
        else if(arr[start] < arr[mid]){
            start = mid+1;
        }else{
            end = mid-1;
        }
     }
     return start
}
console.log(checkNuRotated(arr))
console.log(checkNuRotated1(arr))