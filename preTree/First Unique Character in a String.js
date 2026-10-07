
let s = "aabb"

var firstUniqChar = function(s) {
    let mp = {};
    for(let i = 0; i<s.length;i++){
        mp[s[i]] = (mp[s[i]] || 0)+1;
    }
    let firstOcc = -1;
   for(const [key,value] of Object.entries(mp)){
     if(value === 1){
        firstOcc = key.toString()
        break;
     }
   }
   return firstOcc === -1 ? -1 : s.indexOf(firstOcc)
};

console.log('====================================');
console.log(firstUniqChar(s));
console.log('====================================');