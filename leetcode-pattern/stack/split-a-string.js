let s = "RRLR";

var balancedStringSplit = function (s) {
  let i = 0;
  let itr = 0;
  let count = 0;
  while (i < s.length) {
    if (s[i] === "R") {
      itr++;
      i++;
    } else {
      itr--;
      i++;
    }
    // console.log('itr',itr)

    if (itr === 0) {
      count++;
    }
  }
  return count;
};

console.log(balancedStringSplit(s));
