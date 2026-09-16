let nums = [1, 0, -1, 0, -2, 2],
  target = 0;

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let n = nums.length;
    
    for(let m = 0; m < n - 3; m++){
        if(m > 0 && nums[m] === nums[m-1]) continue;
        if(nums[m] + nums[m+1] + nums[m+2] + nums[m+3] > target) break;
        if(nums[m] + nums[n-3] + nums[n-2] + nums[n-1] < target) continue;
        
        for(let i = m + 1; i < n - 2; i++){
            if(i > m + 1 && nums[i] === nums[i-1]) continue;
            if(nums[m] + nums[i] + nums[i+1] + nums[i+2] > target) break;
            if(nums[m] + nums[i] + nums[n-2] + nums[n-1] < target) continue;
            
            let start = i + 1;
            let end = n - 1;
            
            while(start < end){
                let sum = nums[m] + nums[i] + nums[start] + nums[end];
                
                if(sum === target){
                    ans.push([nums[m], nums[i], nums[start], nums[end]]);
                    
                    // Skip duplicates
                    while(start < end && nums[start] === nums[start+1]) start++;
                    while(start < end && nums[end] === nums[end-1]) end--;
                    
                    start++;
                    end--;
                } else if(sum < target){
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    
    return ans;
};


console.log(fourSum(nums, target));

