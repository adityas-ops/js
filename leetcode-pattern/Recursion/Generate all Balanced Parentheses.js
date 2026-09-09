// generate all balance parathnsis

// n = 2;
// 2 open and 2 close
//  (()) ()()

let n = 4;

function generateParanthesis(n) {
  let open = n
  let close = n
  let op = "";
  let v = [];
  solve(open,close,op,v)
    console.log(v)
}

function solve(open, close, op,v){
    if(open === 0 && close === 0){
        v.push(op);
        return;
    }
    if(open !== 0){
        let op1 = op;
        op1+="("
        solve(open-1,close,op1,v)
    }
    if(close > open){
        let op2 = op;
        op2+=")"
        solve(open, close-1 , op2,v)
    }
}

// function solve(ip1, ip2, op) {
//   if (ip1.length === 0 && ip2.length === 0) {
//     console.log(op);
//     return;
//   }
//   let op1 = op;
//   let op2 = op;
//   let op3 = op;
//   op1 += ip1[0];
//   op2 += ip2[0];
//   op3 += ip1[0] + ip2[0];
//   ip1 = ip1.substring(1, ip1.length);
//   ip2 = ip2.substring(1, ip2.length);
//   solve(ip1, ip2, op1);
//   solve(ip1, ip2, op2);
//   solve(ip1, ip2, op3);
// }

generateParanthesis(n);
