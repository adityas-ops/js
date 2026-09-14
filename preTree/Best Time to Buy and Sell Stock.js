
let prices = [7,6,4,3,1]

var maxProfit = function(prices) {
    let mini = prices[0];
    let Maxi = 0;
    for(let i = 0; i<prices.length-1;i++){
        if(prices[i] < mini){
            mini = prices[i]
        }
        Maxi = Math.max(Maxi,prices[i+1]-mini)
    }
    return Maxi
};

console.log(maxProfit(prices))