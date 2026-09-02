

let str = ['a', 'd', 'i', 't', 'y', 's'];
let out = [];

solve(str, out);
// console.log(out);
function solve(str, out) {
    if (str.length === 0) {
        console.log([...out]);
        return;
    }
    
    let ch = str.shift();
    
    out.push(ch);           // Include
    solve(str, out);
    out.pop();              // Restore
    
    solve(str, out);        // Exclude
}

