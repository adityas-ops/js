let ip = "ab";
//  output should be ab, aB, Ab, AB
let op = "";

function solve(ip, op) {
  if (ip.length === 0) {
    console.log(op);
    return;
  }
  let op1 = op;
  let op2 = op;
   let upper = ip[0].toUpperCase();
   op1+=upper;
   op2+=ip[0]
   ip = ip.substring(1,ip.length)
   solve(ip,op1)
   solve(ip,op2)
}

solve(ip,op)
