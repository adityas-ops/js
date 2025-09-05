// const myObj = {
//     abc : "aditya",
//     xyz: function(){
//         console.log(this.abc)
//     }
// }

// const xyzFunc = myObj.xyz
// const adi = myObj
// adi.abc = "sharma"
// myObj.xyz()
// adi.xyz() 
// both give me same result like sharma because after creating new object with other it totally craete a refence if you changed anything in seocnd object then it auto change in first object

let arry = ["adit",'sharna']

console.log(arry.includes('adit'))

let ans = arry.includes('ADIT')
console.log("print answer :- ",ans)