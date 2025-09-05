// let arr = [,,,,]
// let arr2 = [1,2,3,4]
// let arr3 = [[1,2,3],[4,5,6]]

// console.log("arr length",arr.length)  // 4
// console.log("arr -2 length",arr2.length) // 4
// console.log("arr -3 length",arr3.length) // 2


// sorting  questions
// let arr = [1, 18, 9, 81, 98, 124, 78];

// arr.sort((a, b) => a - b);
// const arr2 = arr.reverse();
// console.log(arr);


// difference between man and filter funtion
// let arr = [1, 18, 9, 81, 98, 124, 78];
// let arr2 = arr.map((item)=>{
//     return item>100
// })
// console.log("result of arr 2",arr2) // that means map only return  boolean not return value so we need to use filter.

// let arr3 = arr.filter((item)=>item>100)
// console.log("result of array 3 using filter method to acheive value :",arr3)


// let arr = [1, 2, 3, 4, 5];

// // slice example
// let newArr = arr.slice(1, 3);
// console.log(newArr); // [2, 3]
// console.log(arr); // [1, 2, 3, 4, 5] (original array unchanged)

// // splice example
// let removed = arr.splice(1, 2);
// console.log(removed); // [2, 3] (removed elements)
// console.log(arr); // [1, 4, 5] (original array modified)



// let arr = [1, 2, 3, 4, 5];

//  arr.length = 0;

//  console.log(arr)


// add elements 
// using splice
// let arr = [];
// arr.splice(0,0,1,2,3,4)
// console.log(arr)

// using push 
// for( let i = 0; i<5;i++){
//     arr.push(i)
// }

// console.log(arr)

// // remove duplicates element from array 
// // using set 
//  let arr2 = new Set(arr)
// console.log('arr using set',arr2)
// // using reduce 
// let arr3  = arr.reduce((accum,current)=>{
//     if(!accum.includes(current)) accum.push(current)
//         return accum;
// },[])

// console.log("using reduce method to remove duplicate",arr3)


// function abd(a,b,c){

// }
// console.log(abd.length)
// function abc(a=0,b,c){}
// console.log(abc.length)


// in js compare two thing by their refrence not their vlaue
// console.log([]==[])

// const str = "aditya sharma i am this is"
// const arr = str.split(" ")
// const arr2 = arr.map((item)=>{
//      return item.charAt(0).toUpperCase()+item.slice(1);
// })

// console.log(arr2)

// console.log(typeof NaN)  // number
// console.log(typeof undefined)  // undefined
// console.log(typeof null) // object

// console.log(NaN === NaN) // false
// console.log(NaN == NaN)  // flase 

var a = 10;
console.log(a++)
console.log(a)
 





