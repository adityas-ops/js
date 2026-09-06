
let nums = [4,3,2,7,8,2,3,1]  
// Output: [2,3]

function findDuplicate(nums){
    let ans = [];
    let obj = {};
    for(const a of nums){
        obj[a] = (obj[a]|| 0)+1;
    }
    for(const [key,value] of Object.entries(obj)){
        if(value>1){
            ans.push(key)
        }
    }
    return ans.map((item)=>parseInt(item))
}

console.log('====================================');
console.log(findDuplicate(nums));
console.log('====================================');