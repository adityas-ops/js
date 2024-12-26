// polyfill 
//  what is polyfill?
//  A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// 1. forEach 
//  forEach() method executes a provided function once for each array element.
// example 
const arr = [1,2,3,4,5];
arr.forEach((element) => {
    console.log(element);
});

// now we will create polyfill for forEach 
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
console.log("myForEach");
const arr1 = [1,2,3,4,5];
arr1.myForEach((element) => {
    console.log(element);
});

// 2. map
// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr2 = [1,2,3,4,5];
const newArr = arr2.map((element) => {
    return element * 2;
});
console.log(newArr);

// now we will create polyfill for map
Array.prototype.myMap = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;
}

console.log("myMap");
const arr3 = [1,2,3,4,5];
const newArr1 = arr3.myMap((element) => {
    return element * 2;
});
console.log(newArr1);

// 3. filter
// filter() method creates a new array with all elements that pass the test implemented by the provided function.

const arr4 = [1,2,3,4,5];
const newArr2 = arr4.filter((element) => {
    return element > 2;
});
console.log(newArr2);

// now we will create polyfill for filter
Array.prototype.myFilter = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

console.log("myFilter");
const arr5 = [1,2,3,4,5];
const newArr3 = arr5.myFilter((element) => {
    return element > 2;
});
console.log(newArr3);


// 4. reduce
// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

const arr6 = [1,2,3,4,5];
const sum = arr6.reduce((acc, element) => {
    return acc + element;
}, 0);
console.log(sum);

// now we will create polyfill for reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
}

console.log("myReduce");
const arr7 = [1,2,3,4,5];
const sum1 = arr7.myReduce((acc, element) => {
    return acc + element;
}, 0);
console.log(sum1);


