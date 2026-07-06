// interation of object 

const student = {
    name:"adi",
    roll:24,
    subject:{
        hindi:1,
        english:2,
        math:3
    }
}

// 1. for..in 
console.log(" for ... i ")
for(let i in student){
    console.log(student[i])
}

// 2. keys
console.log(" using keys  ")
Object.keys(student).forEach((item)=>console.log(student[item]))

// 3. values
console.log("using values")
Object.values(student).forEach((val)=>console.log(val))
