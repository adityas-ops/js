

let int = ['a', 'd', 'i', 't', 'y', 'a'];
let out = [];

solve(int, out);
// console.log(out);
function solve(int, out) {
    if (int.length === 0) {
        console.log([...out]);
        return;
    }
    
    let ch = int.shift();
    
    out.push(ch);           // Include
    solve(int, out);
    out.pop();              // Restore
    
    solve(int, out);        // Exclude
}
