

//implement async.parallel, async.series which executes a set of async task parallel and in series

// 1. first we implement async.parallel

function asyncParallel(tasks, finalCallback) {
    const results = [];
    let completedTasks = 0;
    let hasError = false;
  
    tasks.forEach((task, index) => {
      task((err, result) => {
        if (hasError) return; // If an error occurred, ignore further results
  
        if (err) {
          hasError = true;
          finalCallback(err, null);
          return;
        }
  
        results[index] = result;
        completedTasks++;
  
        if (completedTasks === tasks.length) {
          finalCallback(null, results);
        }
      });
    });
  }
  
//   above function will execute all the tasks in parallel and return the result in the finalCallback function as an array

function asyncTask1(callback) {
    setTimeout(() => callback(null, 'Result 1'), 1000);
  }
  
  function asyncTask2(callback) {
    setTimeout(() => callback(null, 'Result 2'), 500);
  }
  
  asyncParallel([asyncTask1, asyncTask2], (err, results) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Results:', results); // ['Result 1', 'Result 2']
    }
  });

//   definition of async.parallel 
//  in async.parallel we have an array of tasks and a finalCallback function and we have to execute all the tasks in parallel and return the result in the finalCallback function as an array
//  so we will iterate over the tasks array and execute each task and store the result in the results array and when all the tasks are completed we will call the finalCallback function with the results array
  

// 2. now we will implement async.series

function asyncSeries(tasks, finalCallback) {
    const results = [];
    let currentTaskIndex = 0;
  
    function runNextTask() {
      if (currentTaskIndex === tasks.length) {
        finalCallback(null, results);
        return;
      }
  
      const task = tasks[currentTaskIndex];
      task((err, result) => {
        if (err) {
          finalCallback(err, null);
          return;
        }
  
        results.push(result);
        currentTaskIndex++;
        runNextTask();
      });
    }
  
    runNextTask();
  }


  function asyncTask1(callback) {
    setTimeout(() => callback(null, 'Result 1'), 1000);
  }
  
  function asyncTask2(callback) {
    setTimeout(() => callback(null, 'Result 2'), 500);
  }
  
  asyncSeries([asyncTask1, asyncTask2], (err, results) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Results:', results); // ['Result 1', 'Result 2']
    }
  });

//   definition of async.series
// in async.series we have an array of tasks and a finalCallback function and we have to execute all the tasks in series and return the result in the finalCallback function as an array
// so we will iterate over the tasks array and execute each task and store the result in the results array and when all the tasks are completed we will call the finalCallback function with the results array

// difference between async.parallel and async.series
// async.parallel will execute all the tasks in parallel and return the result in the finalCallback function as an array
// async.series will execute all the tasks in series and return the result in the finalCallback function as an array
// so in async.parallel all the tasks will be executed at the same time and in async.series tasks will be executed one
// after the other

  
  