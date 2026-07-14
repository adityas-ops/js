const measureTime = require("../../helper")


let s = "pwwkewabcdefghijpwwkewabcdefghijpwwkewabcdefghijpwwkewabcdefghijpwwkewabcdefghijpwwkewabcdefghij";

function withoutRep(s) {
  let i = 0;
  let j = 0;
  let mp = {};
  let max = -Infinity;
  while (j < s.length) {
    mp[s[j]] = (mp[s[j]] || 0) + 1;

    //
    while (Object.keys(mp).length < j - i + 1) {
      mp[s[i]] -= 1;
      if (mp[s[i]] === 0) {
        delete mp[s[i]];
      }
      i++;
    }
    if (Object.keys(mp).length === j - i + 1) {
      if (max < j - i + 1) {
        // console.log("str",s.slice(i,j+1))
        max = j - i + 1;
      }
    }
    j++;
  }
  return max;
}

console.log(withoutRep(s));

measureTime(withoutRep,s)
