
let arr = [1,3,8,12,18,50,4,2]

// array is bitonic -> monotincally increase then monotincally decrease
// maximum array -> 12


function LargestNum(arr){
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

console.log('====================================');
console.log(LargestNum(arr));
console.log('====================================');