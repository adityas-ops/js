
let nums = [1,2,3,5,6];
var containsDuplicate = function(nums) {
    let mp = {};
    for(const a of nums){
        mp[a] = ( mp[a] || 0)+1
    }
    for(const [key, value] of Object.entries(mp)){
        if(value >1) return true;
    }
    return false
};

var containsDuplicate1 = function(nums) {
   return new Set(...nums).size() === nums.length
};


console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums))