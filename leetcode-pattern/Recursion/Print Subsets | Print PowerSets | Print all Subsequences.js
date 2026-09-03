let str = ['a', 'd', 'i', 't', 'y', 's'];

function solve(arr, index, out) {
    if (index === arr.length) {
        console.log([...out]);
        return;
    }

    let ch = arr[index];

    out.push(ch);
    solve(arr, index + 1, out);  
    out.pop();

    solve(arr, index + 1, out);
}

solve(str, 0, []);