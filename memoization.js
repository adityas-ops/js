const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // write memoization function for the above function
    const memoization = (fn) => {
        let cache = {};
        return function (n) {
        if (n in cache) {
            console.log('Fetching from cache')
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            console.log('first time ');
            return result;
        }
        };
    };

    // fibonaccil the memoization function
//     const memoizedfibonacci = memoization(fibonacci);
//     console.time('memoizedfibonacci-------------------------------------------'); // Start the timer
//     memoizedfibonacci(9); // fibonaccil the function and print the result
//     console.timeEnd('memoizedfibonacci-------------------------------------------'); // End the timer and print the execution time


//     console.time('memoizedfibonacci second time-------------------------------------------'); // Start the timer
//    memoizedfibonacci(3); // fibonaccil the function and print the result
//     console.timeEnd('memoizedfibonacci second time-------------------------------------------'); // End the timer and print the execution time

//     console.time('memoizedfibonacci third time-------------------------------------------'); // Start the timer
//    memoizedfibonacci(3); // fibonaccil the function and print the result
//     console.timeEnd('memoizedfibonacci third time-------------------------------------------'); // End the timer and print the execution time




    // function for factorial
    const factorial = (n) => {
        if (n === 0) {
          return 1;
        }
        return n * factorial(n - 1);
      };

 
const memoFcatorial = memoization(factorial);
console.time('memo Fcatorial-------------------------------------------'); // Start the timer
memoFcatorial(1000); // fibonaccil the function and print the result
console.timeEnd('memo Fcatorial-------------------------------------------'); // End the timer and print the execution time


console.time('memo Fcatorial second time-------------------------------------------'); // Start the timer
memoFcatorial(1000); // fibonaccil the function and print the result
console.timeEnd('memo Fcatorial second time-------------------------------------------'); // End the timer and print the execution time


console.time('memo Fcatorial third time-------------------------------------------'); // Start the timer
memoFcatorial(1000); // fibonaccil the function and print the result
console.timeEnd('memo Fcatorial third time-------------------------------------------'); // End the timer and print the execution time


    
