let n = 8;

function solve(s, d, h, n) {
    if (n === 1) {
        console.log(`plate ${n} from ${s} to ${d}`);
        return;
    }
    solve(s, h, d, n - 1);  // Move n-1 from source TO auxiliary (using destination)
    console.log(`plate ${n} from ${s} to ${d}`);  // Move largest to destination
    solve(h, d, s, n - 1);  // Move n-1 from auxiliary TO destination (using source)
}

solve('s', 'd', 'h', n);