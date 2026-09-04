


let arr = [1,2,4,2,3,4,2,1,5,6];

console.log(arr.reverse())
console.log(arr.sort((a,b)=>a-b))

// remove duplicate using set
console.log([...new Set(arr)])

// suing 
let obj = {};

for(const a of arr){
    obj[a] = (obj[a]||0)+1;
}

console.log(Object.keys(obj).map((item)=>parseInt(item)))

// print all duplicate elements 
let obj1 = {};

for(const a of arr){
    obj1[a] = (obj1[a]||0)+1;
}

console.log('====================================');
console.log(obj1);
console.log('====================================');

for(const [key, value] of Object.entries(obj1)){
     if(value >1) console.log(key)
}

const findDuplicates = arr => [... new Set(arr.filter((item, index) => arr.indexOf(item) !== index))]
console.log("duplicate",findDuplicates(arr));



let str = "aditya";

// reverse
console.log(str.split("").reverse().join(""))
// check palindrome
let str1 = str.split("").reverse().join("")
console.log(str === str1)

