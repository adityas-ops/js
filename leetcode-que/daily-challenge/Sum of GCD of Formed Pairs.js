
let nums = [3,6,2,8]


function findGCD(a,b){
    a = Math.abs(a);
    b = Math.abs(b);
     while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

var gcdSum = function(nums) {
    let maxi = -Infinity;
    let prefixGCD = [];
    let sum = 0;
    for(let i = 0; i<nums.length;i++){
        maxi = Math.max(maxi,nums[i]);
        let gcd = findGCD(maxi,nums[i])
        prefixGCD.push(gcd)
    }
    prefixGCD.sort((a, b) => a - b);

let left = 0;
let right = prefixGCD.length - 1;
while (left < right) {
    sum += findGCD(prefixGCD[left], prefixGCD[right]);
    left++;
    right--;
}

return sum;
};

console.log(gcdSum(nums))