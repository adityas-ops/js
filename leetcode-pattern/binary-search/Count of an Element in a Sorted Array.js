

let arr = [1,2,3,4,5,6,6,6,6,7,8,9,10]
let target = 6;


 function checkOccurIndex(arr,isFirst){
         let start = 0;
    let last = arr.length-1;
    let res = 0;
   
    while(start <= last){
        let mid = start+Math.floor((last-start)/2)
        if(arr[mid] === target){
            res = mid;
           isFirst ?  last = mid-1 : start = mid+1;
        }else if(arr[mid] > target){
            last = mid-1;
        }else {
            start=mid+1;
        }
    }
    return res;
 } 

// first occur and last occur
function countOccurence(arr, target){
   
    return checkOccurIndex(arr,false)-checkOccurIndex(arr,true)+1;

}


console.log(countOccurence(arr,target))

