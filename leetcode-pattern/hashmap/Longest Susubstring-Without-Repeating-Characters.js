
let s = "abcabcbb"


let isDuplicate = function(s){
    let mp = {}
    for(let i in s){
        if(mp.hasOwnProperty(s[i])){
            return true
        }else{
            mp[s[i]] = s[i]
        }
    }
    return false
}



var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let result = 0;
    
    let mp = {}
    for(let right = 0; right < s.length;right++){
        let str = s[right];
         mp[str] = (mp[str]|| 0)+1;
         while(mp[str]>1){
            mp[str] -=1;
            left++;
         }
         result = Math.max(result,right-left+1)
    }
    return result;
};


console.log(lengthOfLongestSubstring(s))
