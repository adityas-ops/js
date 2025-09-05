let obj = { name: "John" };
let map = new Map();
let weakMap = new WeakMap();

map.set(obj, "value");
weakMap.set(obj, "value");

console.log(map.has(obj));      // true
console.log(weakMap.has(obj));  // true

obj = null; // Remove your reference, but maps still hold the old object internally

// You cannot check using obj anymore because it's now null,
// "obj" variable no longer points to that old object key.

console.log(map.has(obj));      // false, since obj is null now
console.log(weakMap.has(obj));  // false, since obj is null now
