
let prices = [7,1,5,3,6,10]

function maxProfit(prices) {
    let minPrice = Infinity, best = 0;
    for(const a of prices){
        minPrice = Math.min(minPrice,a);
        best = Math.max(best, a-minPrice);
    }
    return best;
}

console.log(maxProfit(prices))