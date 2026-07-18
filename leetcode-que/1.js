
// let s = "axe", x = "o", y = "x"
let s = "aabc", x = "a", y="c"
// let s = "dcab", x = "d", y = "b"
var rearrangeString = function(s, x, y) {
    if (!s.includes(x) || !s.includes(y)) return s;

    let ans = "";
    let xCnt = 0, yCnt = 0;
    for (const ch of s) {
        if (ch === x) xCnt++;
        else if (ch === y) yCnt++;
        else ans += ch;
    }

    return y.repeat(yCnt) + ans + x.repeat(xCnt);
};


console.log(rearrangeString(s,x,y))
// console.log(rearrangestring(s,x,y))