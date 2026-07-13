let s = "aabacbebebe";
let k = 3;


function findLongestSubStringDistinct(s, k) {
  let i = 0;
  let j = 0;
  let ans = "";
  let mp = {};

  while (j < s.length) {
    mp[s[j]] = (mp[s[j]] || 0) + 1;

    // Shrink window when distinct chars exceed k
    while (Object.keys(mp).length > k) {
      mp[s[i]] -= 1;           // decrement first
      if (mp[s[i]] === 0) {
        delete mp[s[i]];       // then delete if zero
      }
      i++;
    }

    // Update answer
    if (Object.keys(mp).length === k) {
      let ss = s.slice(i, j + 1);  // j+1 to include current char
      if (ss.length > ans.length) {
        ans = ss;
      }
    }

    j++;
  }
  return ans;
}

console.log(findLongestSubStringDistinct("aabacbebebe", 3)); // "cbebebe"


console.log(findLongestSubStringDistinct(s, k));
