let s = "3[a]2[bc]";

function helper(s, n) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += s;
  }
  return ans;
}

var decodeString = (s) => {
  let ans = "";
  let stringStack = [];
  let countStack = [];
  let tempStr = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c >= "0" && c <= "9") {
      count = count * 10 + (c - "0");
    } else if (c === "[") {
      stringStack.push(tempStr);
      countStack.push(count);
      tempStr = "";
      count = 0;
    } else if (c === "]") {
      let ss = stringStack.pop();
      let nu = countStack.pop();
      tempStr  = ss + helper(tempStr, nu);
    } else {
      tempStr += c;
    }
  }
  return tempStr
};

console.log("====================================");
console.log(decodeString(s));
console.log("====================================");
