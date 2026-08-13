
function getFibo(n){
    if(n === 1) return 0;
    if(n === 2) return 1;
    return getFibo(n-1)+getFibo(n-2)
}


console.log(getFibo(8))