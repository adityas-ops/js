
let n = 5, k = 1;

var kthGrammar = function(n,k) {
   if(n === 1 && k ===1) return 0;
   const length = 2 ** (n-1);
   const mid = length/2;
   if(mid >= k){
    return kthGrammar(n-1,k)
   }else{
    return kthGrammar(n-1,k-mid)
   }
};


console.log(kthGrammar(n,k))