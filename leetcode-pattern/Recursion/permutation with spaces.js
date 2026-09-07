// ABC
// A_B_C
// A_BC
// AB_C
// ABC

let input = "ABC";

let output = "";

output = input[0];
input = input.substring(1,input.length)

function permutationW(ip,op){
    if(ip.length === 0){
        console.log(op)
        return;
    }
    let op1 = op;
    let op2 = op;
    op1+="_"
    op1+=ip[0]
     op2+=ip[0]
    ip = ip.substring(1,ip.length)
    permutationW(ip,op1)
    permutationW(ip,op2)
    return;
}


permutationW(input,output)
