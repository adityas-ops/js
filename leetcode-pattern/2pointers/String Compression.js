let chars = ["a","a","b","b","c","c","c"]

var compress = function (chars) {
  let s = "";
  if (chars.length === 1) return 1;
  let mp = {};
  for (let i in chars) {
    mp[chars[i]] = (mp[chars[i]] || 0) + 1;
  }
  for (const [key, value] of Object.entries(mp)) {
    let temp = "";
    if (value > 1) {
      temp = key + value;
    } else {
      temp = key;
    }  
    s += temp;
  }
  chars = []
  console.log("chars",chars)
  chars = s.split("");
  console.log("chars", chars);
  return chars.length;
};

console.log(compress(chars));
