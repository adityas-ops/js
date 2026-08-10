
const measureTime = require('../../helper')

let arr = [3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4,3,0,0,2,0,4]

function findMax(arr, start, end) {
    let maxi = start;
    let mm = arr[start];
    for (let i = start; i <= end; i++) {
        if (arr[i] > mm) {
            mm = arr[i];
            maxi = i;
        }
    }
    return maxi;
}
// brute force
function findMaxWaterStore(arr) {
    let totalWater = 0;
    for (let i = 0; i < arr.length; i++) {
        let leftMaxi = findMax(arr, 0, i);
        let rightMaxi = findMax(arr, i, arr.length - 1);
        let mini = Math.min(arr[leftMaxi], arr[rightMaxi]);
        totalWater += Math.max(0, mini - arr[i]);
    }
    return totalWater;
}


// o(n)
function findMaxWaterStore1(arr) {
    let stack = []; // stores indices
    let totalWater = 0;

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let top = stack.pop(); // the bar that will hold water
            if (stack.length === 0) break; // no left wall, can't trap

            let left = stack[stack.length - 1];
            let distance = i - left - 1;
            let boundedHeight = Math.min(arr[i], arr[left]) - arr[top];
            totalWater += distance * boundedHeight;
        }
        stack.push(i);
    }

    return totalWater;
}






console.log(findMaxWaterStore(arr));
console.log(findMaxWaterStore1(arr));

measureTime(findMaxWaterStore,arr)
measureTime(findMaxWaterStore1,arr)