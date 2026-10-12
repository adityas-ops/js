


let s = "a good   example"

var reverseWords = function(s) {
    return s.replace(/\s+/g, ' ').trim().split(" ").reverse().join(" ")
}

var reverseWords1 = function(s) {
    let ans = "";
    let temp = "";
    for(let i = s.length-1; i>=0;i--){
        if(s[i] !== " "){
            temp = s[i]+temp;
        }else{
           if(temp !== ""){
             ans += temp+' '
            temp = ''
           }
        }
    }
    if(temp !== ""){
        ans+=temp;
    }
    return ans.trim()
}


console.log(reverseWords(s))
console.log(reverseWords1(s))