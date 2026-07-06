
var numJewelsInStones = function(jewels, stones) {
   let mp = {};
    let totalJewels = 0;
    
    // 1. Count frequencies of all stones
    for (let i = 0; i < stones.length; i++) {
        let stone = stones[i];
        mp[stone] = (mp[stone] || 0) + 1;
    }
    
    // 2. Sum the counts of keys that match jewels
    for (let i = 0; i < jewels.length; i++) {
        let jewel = jewels[i];
        if (mp[jewel]) {
            totalJewels += mp[jewel];
        }
    }
    
    return totalJewels;
    
};

let jewels = "aA"
let stones = "aAAbbbb"

console.log(numJewelsInStones(jewels,stones))