let s = "MCMXCIV"

var romanToInt = function (s) {
  const mp = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = mp[s[i]];
    const next = mp[s[i + 1]];
    // console.log("cur->",cur,",next->",next)
    if (next > cur) ans -= cur;
    else ans += cur;
  }
  return ans;
};



console.log("====================================");
console.log(romanToInt(s));
console.log("====================================");
