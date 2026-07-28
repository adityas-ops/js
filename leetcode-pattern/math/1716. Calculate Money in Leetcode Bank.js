

let n = 20



var totalMoney = function(n) {
    let fullWeeks = Math.floor(n / 7);
    let remainDays = n % 7; 
    let ans = 0;
    for (let w = 1; w <= fullWeeks; w++) {
        ans += 7 * w + 21;
    }
    let start = fullWeeks + 1;
    for (let d = 0; d < remainDays; d++) {
        ans += start + d;
    }
    
    return ans;
};

// console.log(totalMoney(20)); // 96

console.log('====================================');
console.log("ans->",totalMoney(n));
console.log('====================================');


// let a = 2
// let nn = 9
// console.log((nn*(nn+1))/2 - ((a-1)*a)/2)

2,3,4


1+2+3+4+5+6+7


