

let s = "abaccaf";

let k = 2;



function maximumToy(s,k){

    let i = 0;
    let j = 0;
    let max = 0;
    let mp = {};
    while(j<s.length){
        mp[s[j]] = ( mp[s[j]]||0)+1;

        while(Object.keys(mp).length > k){
            mp[s[i]]-=1;
            if(mp[s[i]] === 0){
                delete mp[s[i]];
            }
            i++;
        }
        if(Object.keys(mp).length === k){
            let m = j-i+1;
            max = Math.max(max,m)
        }
        j++;
    }
    return max;

} 

console.log('max',maximumToy(s,k))