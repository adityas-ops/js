let s1 = "ab", s2 = "eidbaooo"

// sliding window method but give tle 
var checkInclusion = function (s1, s2) {
  s1 = s1.split("").sort().join("");
  let i = 0;
  let j = 0;
  while (j < s2.length) {
    if (j - i + 1 === s1.length) {
      let temp = s2
        .substring(i, j + 1)
        .split("")
        .sort()
        .join("");
     //  console.log("temp", temp);
      if (temp === s1) {
        return true;
      }
      i++;
    }
    j++;
  }
  return false;
};

console.log("====================================");
console.log(checkInclusion(s1, s2));
console.log("====================================");


var checkInclusion1 = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const need = new Array(26).fill(0); // counts for s1
  const win = new Array(26).fill(0);  // counts for current window
  const idx = (ch) => ch.charCodeAt(0) - 97;

  for (const ch of s1) need[idx(ch)]++;

  console.log("need",need)
  // How many letters currently have win[k] === need[k]
  let matches = 0;
  for (let k = 0; k < 26; k++) if (need[k] === 0) matches++;

  const add = (k) => {
    if (win[k] === need[k]) matches--;
    win[k]++;
    if (win[k] === need[k]) matches++;
  };
  const remove = (k) => {
    if (win[k] === need[k]) matches--;
    win[k]--;
    if (win[k] === need[k]) matches++;
  };

  for (let j = 0; j < s2.length; j++) {
    add(idx(s2[j]));
    if (j >= s1.length) remove(idx(s2[j - s1.length]));
    if (matches === 26) return true;
  }
  return false;
};

console.log("====================================");
console.log(checkInclusion1(s1, s2));
console.log("====================================");