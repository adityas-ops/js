

// let arr = [2, 7, 11, 5, 3, 6]
// let target = 9

let arr = [1, 5, 7, -1, 5]
let target = 6

function uniquePairHashSet(arr, target) {
    let seen = new Set();
    let pairs = new Set();
    
    for (let num of arr) {
        let complement = target - num;
        
        // If complement exists, we found a pair
        if (seen.has(complement)) {
            // Store as sorted string to avoid duplicates
            let pair = [Math.min(num, complement), Math.max(num, complement)];
            pairs.add(JSON.stringify(pair));
        }
        
        seen.add(num);
    }
    
    return [...pairs].map(str => JSON.parse(str));
}
 
console.log("Hash Set Approach:", uniquePairHashSet(arr, target))