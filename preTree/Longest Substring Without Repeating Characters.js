

let s = "abcabcbb"



// time limit exceed 
function uniqueCheck(s){
    let mp = {};
    for(let i = 0; i<s.length;i++){
        mp[s[i]] = (  mp[s[i]]||0)+1;
        if(mp[s[i]]>1) return false;
    }
    return true;
}

function uniqueCheck2(s){
    let set = new Set(s);

    // console.log('set',set)
    // console.log('set size',set.size)
    return set.size === s.length
}

// console.log(uniqueCheck2("abc"))


var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let j = 0;
    let MaxLen = 0;
    while(i<s.length){
        let subStr = s.substring(j,i+1);
            if(uniqueCheck2(subStr) === true){
                MaxLen = Math.max(subStr.length,MaxLen);
                i++;
            }else{
                j++;
            }
    }
    return MaxLen;
}



var lengthOfLongestSubstring = function (s) {
  const lastSeen = new Map(); // char -> last index
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // If the char is already inside the current window, jump left past it
    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }

    lastSeen.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};



console.log(lengthOfLongestSubstring(s))
// console.log(lengthOfLongestSubstring1(s))
