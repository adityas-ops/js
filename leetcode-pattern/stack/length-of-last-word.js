




// var lengthOfLastWord = function(s) {
//    let arr = s.trim().split(/\s+/)
//    return arr[arr.length-1].length; 
// };

var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length - 1 - s.lastIndexOf(" ");
};

let s = "hello world"
console.log(lengthOfLastWord(s))