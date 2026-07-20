


let nums =[2,3,5,-5,-1]

var minStartValue = function(nums) {
    
    let prefix = [];
    prefix.push(nums[0])
    for(let i = 1; i<nums.length;i++){
        prefix.push(prefix[prefix.length-1]+nums[i])
    }
    console.log('pre',prefix)
    let mini = Math.min(...prefix);
    if(mini >0){
        return Math.min(mini,1)
    }else{
        return Math.abs(mini)+1
    }
};

console.log(minStartValue(nums))