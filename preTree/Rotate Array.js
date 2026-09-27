
let nums = [1,2], k = 3
// [5,6,7,1,2,3,4]
// using extra space 
var rotate1 = function(nums, k) {
     let div = nums.length-k;
     let first = nums.slice(0,div).reverse()
     let second =  nums.slice(div,nums.length).reverse()
      let newA = [...first,...second].reverse()
      for(let i in nums){
        nums[i] = newA[i]
      }
};

// don't using extra space 
var rotate = function(nums, k) {
   let d = nums.length>k ? nums.length-k:k;
    for(let i = 0; i<d;i++){
        let a = nums.shift();
        nums.push(a);
    }
}

console.log('nums',nums)
rotate(nums,k)
console.log('nums',nums)