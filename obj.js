

let example = {
    a:["a","A"],
    b:["b","B"],
    c:["c","C"],
    d:function(){
        console.log("hello world")
    }
}
console.log(example)
console.log(Object.values(example))
console.log(Object.keys(example))


// many way to create object 
// 1. object literal 

const lit = {
    name:"adi",
    age:20
}

console.log('lit',lit)

// object constructuor


let cre = new Object()
cre.name = "adi";
cre.age = 20

console.log('cre',cre)


// object create

let obj = {
    name:"adi",
    age:20,
    data:{
        vill:"rampur",
        post:"rawal",
        fg:{
            id:"87923"
        }
    }
}

let b = obj
let c = Object.create(obj)
console.log('b',b)
console.log('c',c.name)


let studentName = "name"
console.log("b student name dot notation->",b.studentName)
console.log("b student name bracket notation->",b[studentName])

// when to use bracket 
// 1. dynamic keys
// 2. property name has special charactor or space
// 3.  when key start with number 
// D) Property name is computed at runtime
const users = { user1: "Adi", user2: "Raj", user3: "Priya" }

for (let i = 1; i <= 3; i++) {
  console.log(users["user" + i])  // ✅ "Adi", "Raj", "Priya"
}

// Can't do: users."user" + i  ❌

