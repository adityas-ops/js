

let nums = [-1,1,0,-3,3]


// brute force 
function multiply(arr,start,end){
    let multi = 1;
    for(let i = start; i<end;i++){
        multi = multi*arr[i];
    }
    return multi;
}

var productExceptSelf = function(nums) {
    let ans = []
    for(let i = 0; i<nums.length;i++){
        let first = multiply(nums,0,i)
        let second = multiply(nums,i+1,nums.length);
        let mm = first*second;
        mm = mm === 0 ? 0:mm;
        ans.push(mm)
    }

    return ans;
};

// optimise solution with extra space 

var productExceptSelf1 = function(nums) {
    let ans = [];
    let left = [1];
    let right = [1];
    for(let i = 0; i<nums.length-1;i++){
        let m = left[left.length-1]*nums[i]
        left.push(m)
    }
    for(let i = nums.length-1; i>0;i--){
        let m = right[right.length-1]*nums[i]
        right.push(m)
    }
    right  = right.reverse();
    for(let i = 0; i<left.length;i++){
        ans.push(left[i]*right[i] === 0 ? 0: left[i]*right[i])
    }
    return ans;
}

// optimise solution without extra space 

var productExceptSelf2 = function(nums) {
 let ans = [1];
     for(let i = 0; i<nums.length-1;i++){
        let m = ans[ans.length-1]*nums[i]
        ans.push(m)
    }
    let right_product = 1;
    for(let i = nums.length-1; i>=0;i--){
        ans[i] = ans[i]*right_product === 0 ? 0:ans[i]*right_product
        right_product = right_product*nums[i]
    }
    return ans;
}



console.log(productExceptSelf(nums))
console.log(productExceptSelf1(nums))
console.log(productExceptSelf2(nums))