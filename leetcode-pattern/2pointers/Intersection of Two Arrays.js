
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]


var intersection = function(nums1, nums2) {
    let arr = [];
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    
     
    for(const a of set1){
        if(set2.has(a)){
            arr.push(a)
        }
    }
    return arr;
};

console.log(intersection(nums1,nums2))