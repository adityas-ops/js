

let arr = [1,4,2,5,3];



// console.log(findIdx(arr))

// brute force
// var sumOddLengthSubarrays = function(arr) {
//     let count = 0;
//     let length = arr.length;

//     for (let i = 1; i <= length; i += 2) {
//         for (let j = 0; j <= length - i; j++) {
//             for (let k = j; k < j + i; k++) {
//                 count += arr[k];
//             }
//         }
//     }
//     return count;
// };


// optimise
var sumOddLengthSubarrays_Optimized = function(arr) {
    const length = arr.length;
    
    // Build prefix sum array
    const prefix = [0];
    for (let i = 0; i < length; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    
    let sum = 0;
    
    // Iterate through all odd lengths
    for (let i = 1; i <= length; i += 2) {
        // For each odd length, calculate sum of all subarrays of that length
        for (let j = 0; j <= length - i; j++) {
            // Use prefix sum to get sum of subarray from j to j+i-1
            sum += prefix[j + i] - prefix[j];
        }
    }
    
    return sum;
}



console.log(sumOddLengthSubarrays(arr))