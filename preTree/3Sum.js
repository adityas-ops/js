//  let nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


const measureTime = require('../helper')

let nums = [-1,0,1,2,-1,-4];
// brute force 
var threeSum = function(nums) {
    let ans = new Set()
 
    let n = nums.length
    for(let i = 0; i<n-2;i++){
        for(let j = i+1; j<n-1;j++){
            for(let k = j+1; k<n;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    ans.add(JSON.stringify([nums[i],nums[j],nums[k]].sort((a,b)=>a-b)));
                    
                }
            }
        }
    }
    return [...ans].map(JSON.parse);
};


// optimise solution 



// using map 
var threeSum1 = function(nums) {
  let ans = new Set()
    let n = nums.length
    
    for(let i = 0; i<n-2;i++){
        let mp = new Map()
        for(let j = i+1;j<n;j++){
             let target = 0- nums[i]-nums[j];
             if(mp.has(target)){
                ans.add(JSON.stringify([nums[i],target,nums[j]].sort((a,b)=>a-b)));
             }else{
                mp.set(nums[j], j);
             }
        }
    }

    return [...ans].map(JSON.parse)
}

// using set
var threeSum2 = function(nums) {
  let ans = new Set()
    let n = nums.length
    
    for(let i = 0; i<n-2;i++){
        let mp = new Set()
        for(let j = i+1;j<n;j++){
             let target = 0- nums[i]-nums[j];
             if(mp.has(target)){
                ans.add(JSON.stringify([nums[i],target,nums[j]].sort((a,b)=>a-b)));
             }else{
                mp.add(nums[j]);
             }
        }
    }

    return [...ans].map(JSON.parse)
}


// using 2 pointer 
var threeSum2 = function(nums) {
  let ans = new Set()
    let n = nums.length
        nums = nums.sort((a,b)=>a-b)
        
    for(let i = 0; i<n-2;i++){
        if(nums[i]>0 && nums[i] === nums[i-1]) break;
        let start = i+1;
        let end = n-1;
        while(start < end){
            let sum = nums[start]+nums[end]+nums[i];        
            if(sum < 0){
                start++;
            }else if(sum > 0){
                end--;
            }else{
                ans.add(JSON.stringify([nums[start],nums[end],nums[i]].sort((a,b)=>a-b)));
                start++;
                end--;

                while(start <end && nums[start] === nums[start-1]){
                    start++;
                }
            }
        }
    }

    return [...ans].map(JSON.parse)
}




console.log('====================================');
console.log(threeSum(nums));
console.log('====================================');
console.log('====================================');
console.log(threeSum1(nums));
console.log('====================================');
console.log('====================================');
console.log(threeSum2(nums));
console.log('====================================');


 measureTime(threeSum,nums)
  measureTime(threeSum1,nums)
   measureTime(threeSum2,nums)