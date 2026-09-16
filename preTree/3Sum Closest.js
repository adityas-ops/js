
let nums = [-1,2,1,-4], target = 1;

var threeSumClosest = function(nums, target) {
    let n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);
    
    for(let k = 0; k < n - 2; k++){
        let i = k + 1;
        let j = n - 1;
        
        while(i < j){
            let sum = nums[i] + nums[j] + nums[k];
            
            if(Math.abs(target - sum) < Math.abs(target - closestSum)){
                closestSum = sum;
            }
            
            if(sum === target){
                return target;
            } else if(sum < target){
                i++;
            } else {
                j--;
            }
        }
    }
    
    return closestSum;
}; 

console.log(threeSumClosest(nums,target))