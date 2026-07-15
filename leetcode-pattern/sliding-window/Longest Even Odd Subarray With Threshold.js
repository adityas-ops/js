
let nums = [3,2,5,4] ;
let threshold = 5

var longestAlternatingSubarray = function(nums, threshold) {
    let maxLen = 0;
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] % 2 !== 0 || nums[i] > threshold) {
            i++;
            continue;
        }
        
        let j = i;
        let expectedParity = 0; 
        let currentLen = 0;
        
        while (j < nums.length) {
            if (nums[j] > threshold) {
                break;
            }
            if (nums[j] % 2 !== expectedParity) {
                break;
            }     
            currentLen++;
            expectedParity = expectedParity === 0 ? 1 : 0; 
            j++;
        }
        
        maxLen = Math.max(maxLen, currentLen);
        
        i = j === i ? i + 1 : j;
    }
    
    return maxLen;
};


console.log(longestAlternatingSubarray(nums,threshold))