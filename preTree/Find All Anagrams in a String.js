let s = "abab", p = "ab"

function checkAnagram(s, p) {
  let ss = s.split("").sort();
  let pp = p.split("").sort();
  return JSON.stringify(ss) == JSON.stringify(pp);
}

// console.log(checkAnagram("abc","abv"))

var findAnagrams = function (s, p) {
  let ans = [];
  for (let i = 0; i < s.length - p.length + 1; i++) {
    let str = s.substring(i, i + p.length);
    if (checkAnagram(str, p)) {
      ans.push(i);
    }
  }
  return ans;
};

// console.log(findAnagrams(s,p))

var findAnagrams1 = function (s, p) {
  let sortedP = p.split("").sort().join("");
  let i = 0;
  let j = 0;
  let ans = [];
  let temp = [];
  let k = p.length
  while (j < s.length) {
    temp.push(s[j]);
    if (j - i + 1 < k) {
      j++;
    } else {
      // let ts = temp
      let ts = [...temp].sort().join("");
      if (ts === sortedP) {
        ans.push(i)
      }
      temp.shift();
      j++;
      i++;
    }
  }
  return ans;
};

console.log(findAnagrams1(s, p));
