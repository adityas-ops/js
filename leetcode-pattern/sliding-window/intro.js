
let arr = [1,2,3,4,5,6,7,8];

let ws = 3;

let sum = 0;
let max = 0;

for(let i = 0; i<ws;i++){
    sum+=arr[i]
}

max = sum;

for(let i = 1; i<arr.length-1;i++){
    console.log("sum-->",sum)
    sum = sum+(arr[i+ws-1]-arr[i-1])

    if(sum > max) max = sum;
}

console.log('ma',max)