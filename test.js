
const student ={
    name:"adi",
    age:20,
    address:{
        vil:"fazilnagar"
    }
}
console.log("student",student)
// student = {}
student.name = "aditya"
console.log("student",student)
Object.freeze(student)
student.name = "ram"
console.log("student",student)

student.address.vil = "kushinagar"
console.log("student",student)

