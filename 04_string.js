//  this file is all about string in typescript
var myString = 'Aditya sharma';
console.log(myString);
// length of string 
console.log("Length of string is ".concat(myString.length));
//  uppercase and lowercase
console.log("uppercase: ".concat(myString.toUpperCase(), " and lowercase:  ").concat(myString.toLowerCase()));
// position of a character in string and character at a position
console.log("position of a character in string: ".concat(myString.indexOf('a'), " and character at a position: ").concat(myString.charAt(3)));
//  concatenation of string
var myString2 = ' is a good boy';
console.log("concatenation of string: ".concat(myString.concat(myString2)));
//  slicing of string
console.log("slicing of string: ".concat(myString.slice(0, -2)));
// substring of string
console.log("substring of string: ".concat(myString.substring(2, 8)));
// difference between slice and substring
//  slice can take negative values but substring can't take negative values
// replace a character in string
console.log("replace a character in string: ".concat(myString.replace('a', 'A')));
// split a string
// console.log(`split a string: ${myString.split('')}`);
var myString3 = 'this is school and school is good';
var myArray = myString3.split('');
console.log(myArray);
// add * in place of space
console.log(myArray.join(''));
//  trim a string use to remove extra spaces from start and end of string
var myString4 = '    a@gmail.com  ';
console.log("trim a string: ".concat(myString4.trim()));
//  padding a string
console.log("padding a string: ".concat(myString3.padStart(50, '*')));
//  padding a string from end
console.log("padding a string from end: ".concat(myString3.padEnd(50, '*')));
// replace 
var url = 'https://www.google.com/aditya%20sharma%20is%20a%20good%20boy';
console.log(url.replace("%20", ' '));
//  replace all occurences of a character
console.log(url.replace(/%20/g, ' '));
