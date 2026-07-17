
const measureTime = require("../../helper");
let haystack = "abc", needle = "c";


var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};



var strStr1 = function(haystack, needle) {
   let i = 0;
   let j = 0;
  
   while(j<haystack.length){
        if(j<needle.length-1){
            j++;
        } 
      else{
         let s = haystack.slice(i,j+1);
         console.log("s",s)
        if(s === needle) return i;
        i++;
        j++;
      }
   }
   return -1;
};

// console.log("ans",strStr(haystack,needle))
console.log("ans",strStr1(haystack,needle))

measureTime(strStr,haystack,needle)
measureTime(strStr1,haystack,needle)