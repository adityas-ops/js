let str = ["a", "d", "i", "t", "y", "a"];

function solve(arr, index, out) {
  if (index === arr.length) {
    const ss = new Set([...out])
    console.log(ss);
    return;
  }

  let ch = arr[index];

  out.push(ch);
  solve(arr, index + 1, out);
  out.pop();

  solve(arr, index + 1, out);
}

solve(str, 0, []);
