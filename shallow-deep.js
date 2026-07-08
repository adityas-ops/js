
const student = {
    name:"aditya",
    age:20,
    address:{
        vill:"fazilnagar",
        dist:"kushinagar"
    }
}

// copy shallow copy 

const st2 = Object.assign(student,{})
const st3 = {...student}
 st3.name = "aditya-2"
 console.log(student)
console.log(st2)
console.log(st3)


// deep copy 
const deep  = structuredClone(student)
 console.log(deep)