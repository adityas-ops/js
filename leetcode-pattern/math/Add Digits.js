let num = 389;

var addDigits = function (num) {
  let str = String(num);

  while (str.length > 1) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }

    str = String(sum);
  }

  return str;
};


// optimal approach

var addDigits1 = function (num) {
    if (num === 0) return 0;
    return num%9
}


console.log(addDigits(num));
