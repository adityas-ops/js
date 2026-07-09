function Memo() {
  let obj = {};
  return function (a, b) {
    if (obj[`${a}${b}`]) {
        console.log("found the key and returning from cache")
      return obj[`${a}${b}`];
    } else {
          console.log("does not found the key so crate new one")
      let ans = a * b;
      obj[`${a}${b}`] = ans;
      return ans;
    }
  };
}

const multi = Memo();

console.log(multi(5, 2));
console.log(multi(5, 2));
