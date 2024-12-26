// this file is for date and time in typescript

const myDate: Date = new Date();
console.log(myDate);

//  get the current date
console.log(`current date: ${myDate.getHours()}`);

const date: Date = new Date('2021-08-15');
console.log(date.toDateString());