

let s = "bcbbbcba";
// let s = "aaaa"

var maximumLengthSubstring = function(s) {
    let i = 0;
    let j = 0;
    let Max = 0;
    let mp = {};
    while(j<s.length){
        mp[s[j]] = (mp[s[j]] || 0)+1
        while(mp[s[j]] > 2){
            mp[s[i]]-=1;
            if(mp[s[i]] === 0){
                delete mp[s[i]];
            }
            i++;
        }
         Max = Math.max(Max, j - i + 1);
        j++;
    }
   
    return Max;
};

console.log("ans",maximumLengthSubstring(s))



