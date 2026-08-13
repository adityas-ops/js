
function printN(n){
    if(n < 1) return;  
    printN(n-1)
    console.log('n',n)
      
  
}

// console.log(printN(10))
printN(10)