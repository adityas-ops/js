let nums = [1,0,-1]

var longestConsecutive = function (nums) {
      let mp = {};
    for (let i = 0; i < nums.length; i++) {
        mp[nums[i]] = true; // just mark existence, no need for count
    }
    
    let maxLen = 0;
    
    for (let num in mp) {
        num = parseInt(num);
        // only start counting from the beginning of a sequence
        if (!mp[num - 1]) {
            let currentNum = num;
            let currentLen = 1;
            
            while (mp[currentNum + 1]) {
                currentNum++;
                currentLen++;
            }
            maxLen = Math.max(maxLen, currentLen);
        }
    }
    
    return maxLen;

};

console.log(longestConsecutive(nums));
