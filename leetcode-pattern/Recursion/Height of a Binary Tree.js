



function sumOne(n){
    let sum = 0;
    if( n<0) return;
    sum+=n;
    sumOne(n-1)
}

sumOne(10)

// console.log('sum',sum)