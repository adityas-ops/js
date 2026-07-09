

let s = "vvvlo"


var Conti = (s)=>{
    let ans = false;
    for(let i = 0; i<s.length-1;i++){
        if(s[i] === s[i+1]){
            ans = true;
        }
    }
    return ans;
}

var reorganizeString = function(s) {
    s = s.split('').sort().join('')
    let mp = {}
    let ans =""

    for(let i = 0;i<s.length;i++){
        let ch = s[i]
        mp[ch] = (mp[ch]||0)+1
    }

  mp = Object.fromEntries(
  Object.entries(mp).sort((a, b) => b[1] - a[1])
);
    let max = Math.max(...Object.values(mp))
    console.log("max",max)

    for(let i = 0; i<max;i++){
        for(let j in mp){
            if(mp[j] > 0){
                console.log("j",j)
                ans+=String(j)
            }
            mp[j] = mp[j]-1;
        }
    }

    return  Conti(ans) ? " ":ans
};


var reorganizeString = function(s) {
    // Step 1: Count frequency of each character
    let mp = {}
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        mp[ch] = (mp[ch] || 0) + 1
    }
    
    // Step 2: Check if reorganization is possible
    let max = Math.max(...Object.values(mp))
    
    // If max frequency > (n+1)/2, impossible to arrange
    if(max > Math.ceil(s.length / 2)) {
        return ""  // Impossible to reorganize
    }
    
    // Step 3: Sort by frequency (descending)
    mp = Object.fromEntries(
        Object.entries(mp).sort((a, b) => b[1] - a[1])
    )
    
    // Step 4: Build result using optimal placement
    let ans = new Array(s.length)
    let idx = 0
    
    // Place high-frequency characters at even indices first
    for(let char in mp) {
        for(let count = 0; count < mp[char]; count++) {
            if(idx >= s.length) {
                idx = 1  // Switch to odd indices if even indices filled
            }
            ans[idx] = char
            idx += 2
        }
    }
    
    let result = ans.join('')
    
    // Step 5: Verify result
    return Conti(result) ? "" : result
};

console.log(reorganizeString(s))