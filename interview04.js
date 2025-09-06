// let obj = { name: "John" };
// let map = new Map();
// let weakMap = new WeakMap();

// map.set(obj, "value");
// weakMap.set(obj, "value");

// console.log(map.has(obj));      // true
// console.log(weakMap.has(obj));  // true

// obj = null; // Remove your reference, but maps still hold the old object internally

// // You cannot check using obj anymore because it's now null,
// // "obj" variable no longer points to that old object key.

// console.log(map.has(obj));      // false, since obj is null now
// console.log(weakMap.has(obj));  // false, since obj is null now

// arr = [1,2,2,1,2,23,23,23,23,23]

// let b = new Set(arr)
// // arr = Array(b)
// arr = []
// b.forEach((item)=> arr.push(item))
// console.log(arr)

// generator function
// the function which can pause its execution and resume letter, allowing it to yield multiple values one at a time instaed of returning ust one

// function firstOne() {
//   console.log("hello Aditya!");
// }
// function secondOne() {
//   console.log("this is ai from heaven.");
// }
// function* adi() {
//   yield firstOne();
//   yield secondOne();
//   return "Done";
// }
// const generator = adi();

// generator.next();
// generator.next();
// generator.next();
// generator.next();

// count string length without whitespace

// let str = "hello this is aditya sharma"
// const tempCount = str.length
// const arr = str.split(" ")
// const arrCount = arr.length

// // console.log(tempCount,arrCount)
// console.log(tempCount-(arrCount-1))

// second method
// let count = 0;
// let i = 0;
// while(i<str.length){
//     if(str[i] === " "){
//         i++
//     }
//     else{
//         count++,
//         i++
//     }
// }

// console.log("count using while loop",count) this takes //

// count each character count in this

// let str = "hello this is aditya sharma"
//   result = {}
// for(let i = 0; i<str.length ;i++){
//     if(str[i] === " "){
//         i++
//     }else{
//         result[str[i]] = (result[str[i]] || 0)+1
//     }
// }

// console.log(result)

// let str = "hello this is aditya sharma"

// let arr = str.split(" ")
// arr.reverse()
// str = arr.join(" ")
// console.log(str)

// const obj = {
//     name:"aditya",
//     abc:{
//         name:"sharma"
//     }
// }

// const obj2 = {...obj}

// // obj2.abc.name = "agrima"
// // obj2.name = "agrima"

// console.log(obj2)

const arr = [
  [1, 2],
  ["aditya", "sharma"],
  [3, 4],
];
// merge all sub array into one array

// this function use only one level marging
// function MergeArray(arr){
//     tempArray = []
//     for(let i = 0; i<arr.length;i++){
//         for(let j = 0; j<arr[i].length;j++){
//             tempArray.push(arr[i][j])
//         }
//     }
//     return tempArray
// }

// const modify = MergeArray(arr)
// console.log(modify)

// use flatten to merge all level of array into single array
// function flatten(arr) {
//   let flat = [];
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (Array.isArray(val)) {
//       flat = flat.concat(flatten(val));
//     } else {
//       flat.push(val);
//     }
//   }
//   return flat;
// }

// const modify = flatten(arr)
// console.log(modify)


// function abc(){
//     console.log(this.name)
// }
// abc.call({name:"aditya"})
