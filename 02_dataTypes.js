"use strict"; // treat all errors as runtime errors and js code as newer version
// primitive data types
// numbers 
var num1 = 10; // number store integer values upto 2^53.  use BigInt for larger numbers
console.table({ num1: num1 });
// string
var str1 = "Hello"; // string store text values
// boolean
var isTrue = true; // true or false
// null
var nullVar = null; // null value it is standlone value and not an object 
// null is a special value that represents the absence of a value or an empty value
// undefined
var undef = undefined; // undefined value it is a type and value
// symbol
var sym1 = Symbol('symbol'); // symbol is a primitive data type that is unique and immutable
// console.log(typeof num1);
// console.log(typeof str1);
// console.log(typeof isTrue);
// console.log(typeof nullVar);
// console.log(typeof undef);
// console.log(typeof sym1);
// non-primitive data types
//object 
var obj2 = {
    name: "John",
    age: 30
};
// console.log(obj2);
// array
var arr1 = [1, 2, 3, 4, 5];
var username = "this is method to define type of variable";
// console.log(username);
var newSymbol = Symbol('newSymbol');
var secondSymbol = Symbol('newSymbol');
console.log(newSymbol === secondSymbol);
