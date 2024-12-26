
//  this file is all about string in typescript

const myString: string = 'Aditya sharma';
console.log(myString);

// length of string 
console.log(`Length of string is ${myString.length}`);

//  uppercase and lowercase
console.log(`uppercase: ${myString.toUpperCase()} and lowercase:  ${myString.toLowerCase()}`);

// position of a character in string and character at a position
console.log(`position of a character in string: ${myString.indexOf('a')} and character at a position: ${myString.charAt(3)}`);

//  concatenation of string
const myString2: string = ' is a good boy';
console.log(`concatenation of string: ${myString.concat(myString2)}`);

//  slicing of string
console.log(`slicing of string: ${myString.slice(0, -2)}`);

// substring of string
console.log(`substring of string: ${myString.substring(2, 8)}`);

// difference between slice and substring
//  slice can take negative values but substring can't take negative values

// replace a character in string
console.log(`replace a character in string: ${myString.replace('a', 'A')}`);

// split a string
// console.log(`split a string: ${myString.split('')}`);

const myString3: string = 'this is school and school is good';

const myArray: string[] = myString3.split('');
console.log(myArray);

// add * in place of space
console.log(myArray.join(''));  

//  trim a string use to remove extra spaces from start and end of string
const myString4: string = '    a@gmail.com  ';
 console.log(`trim a string: ${myString4.trim()}`);

//  padding a string
console.log(`padding a string: ${myString3.padStart(50, '*')}`);

//  padding a string from end
console.log(`padding a string from end: ${myString3.padEnd(50, '*')}`);


// replace 
const url:string = 'https://www.google.com/aditya%20sharma%20is%20a%20good%20boy';
console.log(url.replace("%20", ' '));

//  replace all occurences of a character
console.log(url.replace(/%20/g, ' '));
