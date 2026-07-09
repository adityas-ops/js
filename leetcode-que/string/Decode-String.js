

let s = "2[abc]3[cd]"


 function multiStr(s,n){
    let ans = '';
    for(let i = 0; i<n;i++){
        ans+=s;
    }
    return ans;
}


var decodeString = (s)=>{
    let sStack = []
    let intStack = []
    let count = 0;
    let s1 = ""
    for(let i = 0; i<s.length;i++){
        let c = s[i]
         
        if(c >= '0' && c <='9'){
            count = 10* count+(c-'0')
        }else if(c === '['){
            sStack.push(s1);
            intStack.push(count);
            s1 = ""
            count = 0;
        }else if(c === ']'){
            let s2 = sStack.pop();
            let n1 = intStack.pop();
            s1 = s2+multiStr(s1,n1)
        }else{
            s1+=c;
        }
    }
    console.log("string stack",sStack)
    console.log("number stack",intStack)
    return s1;
}



console.log("ans",decodeString(s))