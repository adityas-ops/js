
let s = "()))(("
var minAddToMakeValid = function(s) {
    if(s.length <=0) return 0
    if(s.length === 1) return 1
    let leftArray = [];
    let rightArray = [];
    let temp = s[0];
    if(temp === '('){
        leftArray.push('(')
    }else{
        rightArray.push(')')
    }
    for(let i = 1; i<s.length;i++){
        let t = s[i];
        if(t === ')'){
            if(leftArray.length >0){
                leftArray.pop()
            }else{
                rightArray.push(')')
            }
        }
        else{
            leftArray.push('(')
        }
    }
    return Math.abs(leftArray.length+rightArray.length)
}

console.log(minAddToMakeValid(s))