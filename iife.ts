
// simple function 


function life(){
    console.log('this is life in global')
}

life();


// imediate invoked function expression :- it help in creating a scope for the function and it is invoked immediately becuase due to global scope it is not invoked



(function life(){
    console.log('this is invoked function')
})()



// need for iife
// 1. to create a scope for the function
// 2. to avoid global scope
// 3. to avoid naming conflicts
// 4. to avoid polluting the global scope
// 5. to avoid hoisting
// 6. to avoid global variables