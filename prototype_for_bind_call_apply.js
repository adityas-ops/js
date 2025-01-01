

const person ={
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

person.greet();

 const anotherPerson = {
     name: 'Aditya'
 }

    person.greet.call(anotherPerson);
    // here i am barrowing greet method from person object and calling it with anotherPerson object as this object 
    // so it will print Hello Aditya

// create polyfill for call method
Function.prototype.myCall = function(context, ...args){
    context.fn = this;
    context.fn(...args);
    delete context.fn;
}
person.greet.myCall(anotherPerson);


// now use apply method 
// first of all what is apply method
// apply method is same as call method but the only difference is that it takes arguments in array format
// so we can pass arguments in array format
console.log("<-----------------Apply method----------------->");
person.greet.apply(anotherPerson);

// now crate a unique example for apply method
const numbers = [1,2,3,4,5];
const max = Math.max.apply(null, numbers);
console.log(max);
// as we know that Math.max() method takes multiple arguments and return the maximum number from the arguments 
// so we can pass arguments in array format using apply method
// we can use spread operator to pass arguments in array format 
const max1 = Math.max(...numbers);
console.log(max1);

// create polyfill for apply method
Function.prototype.myApply = function (thisArg, argsArray) {
    // Ensure `thisArg` is an object or defaults to the global object
    thisArg = thisArg === null || thisArg === undefined ? globalThis : Object(thisArg);
    // Create a unique property on `thisArg` to store the function
    const fnSymbol = Symbol();
    thisArg[fnSymbol] = this;
  
    // Use spread operator to invoke the function with the provided arguments
    const result = argsArray ? thisArg[fnSymbol](...argsArray) : thisArg[fnSymbol]();
  
    // Clean up by deleting the temporary property
    delete thisArg[fnSymbol];
    return result;
  };
  


console.log("<-----------------myApply method----------------->");
person.greet.myApply(anotherPerson);


// now use bind method
// first of all what is bind method
// bind method is used to bind the function to the object and return a new function
// so that we can use that function later

console.log("<-----------------Bind method----------------->");
const greet = person.greet.bind(anotherPerson);
greet();
// here i am binding greet method to anotherPerson object and returning a new function greet
// so that we can use that function later
// so it will print Hello Aditya

// create polyfill for bind method
Function.prototype.myBind = function(context, ...args){
    const fn = this;
    return function(...args2){
        fn.apply(context, [...args, ...args2]);
    }
}

const greet1 = person.greet.myBind(anotherPerson);
greet1();



// example - 1

const animals = [
    {
        name: 'cat',
        size: 'small'
    },
    {
        name: 'dog',
        size: 'small'
    },
    {
        name: 'lion',
        size: 'large'
    }
]

function printAnimal(i){
    console.log(`${i+1}. ${this.name} is a ${this.size} animal`);
 }

 for (let i = 0; i < animals.length; i++) {
    printAnimal.call(animals[i], i);
 }


//  use apply 
console.log("<-----------------Apply method----------------->");
for (let i = 0; i < animals.length; i++) {
    printAnimal.apply(animals[i], [i]);
 }

//  use bind
console.log("<-----------------Bind method----------------->");

for (let i = 0; i < animals.length; i++) {
    const printAnimal1 = printAnimal.bind(animals[i], i);
    printAnimal1();
 }
