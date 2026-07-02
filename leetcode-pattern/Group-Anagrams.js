
let strs = ["eat","tea","tan","ate","nat","bat"]

// var groupAnagrams = function(strs) {
//     // let arr = strs.map((item)=>item.split('').sort().join(''))
//      arr = strs;
//      console.log(arr)
//     let ans = [];
//     for(let i = 0; i<arr.length;i++){
//         let temp = [];
//         temp.push(arr[i]);
//         for(let j = i+1; j<arr.length;j++){
//             let sortA = arr[i].split('').sort().join('')
//             let sortB = arr[j].split('').sort().join('')
//             console.log('sortA',sortA)
//             console.log('sortB',sortB)
//             if(sortA === sortB){
//                 temp.push(arr[j])
//             }
//         }
//         ans.push(temp)
//     }
//     // ans.pop()
//     // ans = ans.sort()
//     const result = ans.filter(arr => {
//     // Keep arr only if NO other array contains all of arr's elements
//     return !ans.some(other => {
//         if (other === arr) return false; // skip itself
//         return arr.every(item => other.includes(item)); // check if arr is subset of other
//     });
// });
//     return result.sort()

// };


var groupAnagrams = function(strs) {
    let map = {};

    for (let str of strs) {
        let key = str.split('').sort().join(''); // "eat" -> "aet"

        if (map.hasOwnProperty(key)) {
            map[key].push(str);  // add to existing group
        } else {
            map[key] = [str];    // create new group
        }
    }
    console.log('map',map)
    return Object.values(map);

};
console.log("a->",groupAnagrams(strs))