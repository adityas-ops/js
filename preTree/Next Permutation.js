
let nums = [2,1,3];

function reverse(nums,start,end){
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

function swap(nums,start,end){
     let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
}

var nextPermutation = function(nums) {
    
    let n = nums.length;
    // first find the blue cirlce as gola index
    let gldx = -1;
    for(let i = n-1; i>0;i--){
        if(nums[i]> nums[i-1]){
            gldx = i-1;
            break;
        }
    }
   if(gldx !== -1){
     let sidx = gldx;
    for(let j = n-1; j>0 ; j--){
        if(nums[j]> nums[gldx]){
            sidx = j;
            break;
        }
    }
    swap(nums,gldx, sidx);
   }
    reverse(nums,gldx+1, nums.length - 1)
};

nextPermutation(nums);
console.log(nums)

// console.log(nextPermutation(nums));
