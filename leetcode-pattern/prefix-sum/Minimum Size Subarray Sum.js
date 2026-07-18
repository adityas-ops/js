

let target =11, nums = [1,2,3,4,5]


var minSubArrayLen = function(target, nums) {
    let i = 0;
    let j = 0;
    let mini = Number.MAX_VALUE;
        let sum = 0;
    while(j<nums.length){
        sum+=nums[j]
       if(sum >= target){
        mini = Math.min(mini,j-i+1);
        sum-=nums[i];
        i++;
       }
       j++;
    }
    return mini

};


// prefix sum 
var minSubArrayLen = function(target, nums) {

    let prefix = [0];
    for(let i = 0; i < nums.length; i++) {
        prefix.push(prefix[prefix.length - 1] + nums[i]);
    }
    
    let mini = Number.MAX_VALUE;
    
    // For each starting position
    for(let i = 0; i < nums.length; i++) {
        // Binary search for the smallest subarray ending at j where sum >= target
        let left = i + 1;
        let right = prefix.length - 1;
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            let sum = prefix[mid] - prefix[i];  // Sum from i to mid-1
            
            if(sum >= target) {
                mini = Math.min(mini, mid - i);
                right = mid - 1;  // Try to find smaller subarray
            } else {
                left = mid + 1;  // Need larger subarray
            }
        }
    }
    
    return mini === Number.MAX_VALUE ? 0 : mini;
};




console.log(minSubArrayLen(target,nums))