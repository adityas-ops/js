// arr = [1,2,3], 
// fn = function plusone(n) { return n + 1; }



// // using different ways to implement map function

//  const map1 = (arr, fn) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(fn(arr[i]));
//     }
//     return result;
//  }





// var map = function(arr, fn) {
//     // var result = [];
//     // for (var i = 0; i < arr.length; i++) {
//     //     result.push(fn(arr[i]));
//     // }
//     // return result;
//     // const result = arr.map(fn);
//     // return result;
//     // return arr.map(fn);
//     return  map1(arr, fn);
// }

// 
let x = 4

const functions = [x => x + 1, x => x * x, x => 2 * x];

var compose = function(functions) {
    // first reverse the array
    functions = functions.reverse();
    return function(x) {
        return functions.reduce((acc, fn) => fn(acc), x);
    }
}

const fn = compose(functions);

console.log(fn(4)); // 10


var argumentsLength = function(...args) {
    return args.length;
};

console.log(argumentsLength(1, 2, 3, 4, 5)); // 5