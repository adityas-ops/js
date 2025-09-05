
// let arry = ["chandan","and"]

// let elementOne = arry[0]
// let target = arry[1]

// isSubstring = elementOne.includes(target)
// console.log("is sub string or not",isSubstring)
// console.log(elementOne.split(""))

//  console.log("just checking every function",arry.every((item)=> item.includes("and")))



// find fibbonaci nth index value  excluding first two 

// function helper(n){
//  if(n === 0 || n === 1){
//     return n;
//  }
//  return helper(n-1)+helper(n-2)
// }

// function findFibo(n){
//     for(let i = 2; i<n+2;i++){
//         console.log(helper(i))
//     }
// }
// findFibo(9)



// find object which age less then 24

// const arrayStudents = [
//     {
//         name:"aditya",
//         age:23
//     },
//       {
//         name:"ramesh",
//         age:26
//     },
//       {
//         name:"amar",
//         age:22
//     },
//       {
//         name:"akbar",
//         age:20
//     },
// ]

// using for loop 
// let modifyArray = []
// for(let i = 0; i<arrayStudents.length;i++){
//      if(arrayStudents[i].age < 24){
//         modifyArray.push(arrayStudents[i])
//      }
// }
// console.log("modified array",modifyArray)

// // using reducer 

// let modifyArray2 = arrayStudents.reduce((acc,student)=>{
//     if (student.age < 24) {
//         acc.push(student);
//     }
//     return acc;
// },[])

// console.log("modified array 2",modifyArray2)

// using filter

// function abc(a,...b){
//   console.log(b,typeof b)
// }

// abc(10,8,7)
// console.log(this)
// 