

let nums = [1000000000,1000000000,-1000000000,-1000000000,-1000000000]

var majorityElement = function(nums) {
     let mp = {};
     let maxi = -Infinity
     for(let a of nums){
        mp[a] = (mp[a]||0)+1;
     }
     console.log('mp',mp)
     for(const [key,value] of Object.entries(mp)){
        let val = Number(value)
        if(val >= Math.ceil(nums.length/2) === true){
            let num = Number(key)
            if(num > maxi){
                maxi = num
            }
        }
     }
     return maxi;
};


console.log('====================================');
console.log(majorityElement(nums));
console.log('====================================');