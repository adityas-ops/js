
let s = "jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt", k = 731963130



function findLength(s){
    let count = 0n;
    for(let i = 0; i<s.length;i++){
        let c = s[i];
        if(c >= '0' && c <= '9'){
            count = count *BigInt(c-'0')
        }else{
            count+=1n;
        }
    }
    return count;
}

var decodeAtIndex = function(s, k) {
    let dino = findLength(s);
     k = BigInt(k)
    for(let i = s.length-1; i>=0; i--){
        let c = s[i];
        k = k%dino;
        if(k == 0 && !( c >= '0' && c<='9')){
            return String(c);
        }
       if(!( c >= '0' && c<='9') ){
            dino-=1n
        }
        else{
            dino = dino/BigInt(c-'0')
        }
    }
    return ""
}


console.log('ans',decodeAtIndex(s,k));
