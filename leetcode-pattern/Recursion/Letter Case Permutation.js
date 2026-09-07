let ip = "a1B2";
// output "a1B2", A1B2, A1b2, A1B2
let op = "";

function isNumber(char) {
  return char >= '0' && char <= '9';
}

console.log(isNumber('a'))


function toggleCase(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    return char.toUpperCase();
  }
  return char; 
}

console.log('a',toggleCase('5'))

function solve(ip, op) {
  if (ip.length === 0) {
    console.log(op);
    return;
  }

  let op1 = op;
  let op2 = op;
  let temp = toggleCase(ip[0])
  
}
