
let arr = [1,2,3,4,5,6,7];
let target = 8;

function twoSum(arr, target){
    let set = new Set();
    for(let i = 0; i<arr.length;i++){
        let num = target-arr[i];
        if(set.has(num)){
            return [num,arr[i]]
        }
        set.add(arr[i])
    }
    return [-1,-1]
}

console.log(twoSum(arr,target))
