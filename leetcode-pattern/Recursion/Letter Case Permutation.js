let ip = "a1B2";
// output "a1B2", A1B2, A1b2, A1B2
let op = "";

function isNumber(ch) {
  return ch >= "0" && ch <= "9";
}

function toggleCase(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    return char.toUpperCase();
  }
  return char;
}

// console.log('a',toggleCase('5'))

function solve(ip, op) {
  if (ip.length === 0) {
    console.log(op);
    return;
  }

  let op1 = op;
  let op2 = op;

  if (isNumber(ip[0])) {
    solve(ip.substring(1, ip.length), op + ip[0]);
    return;
  } else {
    let temp = toggleCase(ip[0]);
    op1 += temp;
    op2 += ip[0];
  }
  ip = ip.substring(1, ip.length);
  solve(ip, op1);
  solve(ip, op2);
}

solve(ip, op);
