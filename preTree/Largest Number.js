
let nums = [3,30,34,5,9]



var largestNumber = function(nums) {
       const strs = nums.map(String);

    strs.sort((a, b) => {
        const x = a + b;
        const y = b + a;
        if (x > y) return -1;
        if (x < y) return 1;
        return 0;
    });
    if (strs[0] === "0") return "0";

    return strs.join("");
  
};

console.log(largestNumber(nums))



// 9 5 43330
// 9 5 34 3 30