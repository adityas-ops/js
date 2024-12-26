

const student = {
    name: "John",
    age: 23,
    isActive: true
}

// destructuring object
const { name, age, isActive } = student;

console.log(name, age, isActive); // John 23 true


const array = [
    {
        name: "John",
        age: 23,
        isActive: true
    },
    {
        name: "Jane",
        age: 22,
        isActive: false
    }
]

// destructuring array and took 2nd object




// console.log(secondname, firstAge, firstIsActive); // John 23 true

// benefits of destructuring
// 1. Less code
// 2. Easy to read
// 3. Easy to assign variables
// 4. Easy to swap variables
// 5. Easy to return multiple values from a function
