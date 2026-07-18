

let  nums = [9,7,5,3], a = 4, b = 8;


// var minAdjacentSwaps = function(nums, a, b) {
//     const MOD = 1000000007n;
    
//     let classified = nums.map(n => {
//         if(n < a) return 0;
//         if(n > b) return 2;
//         return 1;
//     });

//     console.log('classfied',classified)
    
//     let swaps = 0n;
    
//     // Pass 1: count swaps to move all 0s to left
//     let nonZeroCount = 0n;
//     for(let i = 0; i < classified.length; i++) {
//         if(classified[i] !== 0) {
//             nonZeroCount++;
//         } else {
//             swaps = (swaps + nonZeroCount) % MOD;
//         }
//     }
    
//     // Pass 2: count swaps to move all 2s to right
//     let nonTwoCount = 0n;
//     for(let i = classified.length - 1; i >= 0; i--) {
//         if(classified[i] !== 2) {
//             nonTwoCount++;
//         } else {
//             swaps = (swaps + nonTwoCount) % MOD;
//         }
//     }
    
//     // Pass 3: subtract double counted (2 appearing before 0)
//     let twoCount = 0n;
//     for(let i = 0; i < classified.length; i++) {
//         if(classified[i] === 2) {
//             twoCount++;
//         } else if(classified[i] === 0) {
//             swaps = (swaps - twoCount + MOD) % MOD;
//         }
//     }
    
//     return Number(swaps);
// };


var minAdjacentSwaps = function(nums, a, b) {
    const MOD = 1000000007n;
    const arr = nums.map(num => {
        if (num < a) return 0;
        if (num > b) return 2;
        return 1;
    });

    let ts = 0n;
    let eb = 0n;

    for (let value of arr) {
        if (value === 0) {
            ts = (ts + eb) % MOD;
        } else {
            eb++;
        }
    }
    eb = 0n;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 2) {
            ts = (ts + eb) % MOD;
        } else {
            eb++;
        }
    }
    let gc = 0n;

    for (let value of arr) {
        if (value === 2) {
            gc++;
        } else if (value === 0) {
            ts = (ts - gc + MOD) % MOD;
        }
    }

    return Number(ts);
};
console.log(minAdjacentSwaps(nums,a,b))