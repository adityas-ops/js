
let nums = [0,1,0]

var findMaxLength = function(nums) {
    let maxi = 0;
    let stack = [];
    let cont=0;
    for(let i =0; i<nums.length;i++){
        if(stack.length === 0 || stack[stack.length-1] === nums[i]){
            stack.push(nums[i])
            cont = 0
        }else{
            cont+=2;
            stack.pop()
            maxi = Math.max(cont,maxi)
        }
        // console.log('stack',stack)
    }
    return maxi
};

console.log(findMaxLength(nums))