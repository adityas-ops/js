

let s = "the sky is blue"

var reverseWords = function(s) {
    let ans = ''
    let temp = ''
    for(let i = s.length-1; i>=0;i--){
        if(s[i] !== ' '){
            temp = s[i]+temp
            console.log('temp->',temp)
        }else{
      
            ans+=temp;
            ans+=" "
              temp = ''
            
        }
    }
    if(temp.length >0){
        ans+=temp;
    }
    return ans;
}


var reverseWords2 = function(s) {
  let result = ''
  let i = s.length - 1

  while (i >= 0) {

    // skip trailing / between-word spaces
    while (i >= 0 && s[i] === ' ') i--

    if (i < 0) break   // only spaces were left

    // mark end of this word, scan left to its start
    let end = i
    while (i >= 0 && s[i] !== ' ') i--

    // s.slice(i+1, end+1) extracts the word
    if (result) result += ' '
    result += s.slice(i + 1, end + 1)
  }

  return result
};

console.log("ans->",reverseWords(s))


// console.log("a"+s[0])