
let s = "ann"
let t = "egg"


// var isIsomorphic = function(s, t) {
//     let oS = {}
//     let oT = {}
//     if (s.length !== t.length) return false;
//     for(const a of s){
//         oS[a] = (oS[a]||0)+1
//     }
//     for(const a of t){
//         oT[a] = (oT[a]||0)+1
//     }
//     if(oS.length !== oT.length) return false;
//     const values1 = Object.values(oS); // [1, 2]
// const values2 = Object.values(oT); // [1, 2]
// const isEqual = values1.every((val, index) => val === values2[index]);
// // console.log(isEqual);
//     return isEqual;
// };

var isIsomorphic = function(s, t) {
    let obj = {}
    if (s.length !== t.length) return false;
    console.log("hello")
    for(let i = 0; i<s.length;i++){
        if(obj.hasOwnProperty(s[i])){
            if(obj[s[i]].value !== t[i]) return false;
        }
        obj[s[i]] = t[i];
    }
    console.log("obj",obj)
    return true
}

console.log(isIsomorphic(s,t))

