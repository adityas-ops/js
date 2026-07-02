let s = "anagram";
let t = "nagaram";



let obj1 = {};
let obj2 = {};

for (const a of s) {
  obj1[a] = (obj1[a] || 0) + 1;
}
// console.log(obj)
for (const a of t) {
  obj2[a] = (obj2[a] || 0) + 1;
}

function isShallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

   return keys1.every(key => obj1[key] === obj2[key]);
  
  
}

console.log(isShallowEqual(obj1,obj2))
