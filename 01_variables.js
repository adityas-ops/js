
// we can not change the value of a constant variable
const accountId = ""


// we can change the value of a variable it is recommended to use let instead of var
let accountEmail = "aditya@gmail.com"

// we can change the value of a variable but it is not recommended becuase it is create problem in scoping 
var accountPassword = "password"

// 
city = "Bangalore"


accountEmail = "a@gmail.com"
accountPassword = "pass"
city = "Mumbai"

console.table({accountId, accountEmail, accountPassword, city})


/*

    const: The const keyword is used to declare a constant variable.
    let: The let keyword is used to declare a block-scoped variable.
    var: The var keyword is used to declare a variable globally, or locally to an entire function regardless of block scope.

    if we don't assign any value to a variable then it will be undefined
    if we don't declare a variable then it will be a reference error

    if we don't assign any value to a constant variable then it will be a syntax error
    
*/