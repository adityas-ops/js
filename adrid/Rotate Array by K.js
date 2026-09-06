
let arr = [1,2,3,4,5,6,7]

// 4,5,6,7, 1,2,3

function rotate(nums, k) {
    let arr1 = nums.slice(0,k);
    let arr2 = nums.slice(k,nums.length);
    arr1.reverse();
    arr2.reverse();
     let ans = [...arr1, ...arr2];
     return ans.reverse()
}

console.log('====================================');
console.log(rotate(arr,3));
console.log('====================================');