

let arr =[174,380,836,-114,211,-603,8,-787,920,363,-202,-394,32,23,-965,-334,253,785,-177,842,-424,-963,-679,-589,756,-329,661,153,602,-724,-306,-121,-564,-455,381,-803]

function binarySearch(start,end,arr,target){
    // console.log('====================================');
    //  console.log('start',start)
    // console.log('end',end)
    // console.log('arr',arr)
    // console.log('target',target)
    // console.log('====================================');
    while(start <= end){
        let mid = start+Math.floor((end-start)/2);
        if(arr[mid] === target) return true;
        else if(arr[mid] < target){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return false;
}
var checkIfExist = function(arr) {
    arr.sort((a,b)=>a-b)
    let ans = false;
    let n = arr.length-1
    console.log('arr',arr)

    for(let i = 0; i<arr.length;i++){
        // console.log('a->',i)
        let num = arr[i] > 0 ? arr[i]*2 : Math.floor(arr[i]/2);
        ans =  binarySearch(i+1,n,arr,num)
        if(ans === true) return true;
    }
    return ans;
};

console.log(checkIfExist(arr))
// console.log(binarySearch(0,4,[1,2,3,4]))