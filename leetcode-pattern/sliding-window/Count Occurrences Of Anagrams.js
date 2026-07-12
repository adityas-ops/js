const measureTime = require("../../helper");

let s = Array.from({length: 100000}, () => String.fromCharCode(97 + Math.random() * 26)).join('');
let ana = "abc";

console.log(s.length)

function countAnagrams(s,ana){
    let  sortedAna = ana.split('').sort().join('')
    let k  = sortedAna.length
    
    let count = 0;
    let temp = [];
    let i = 0, j = 0;
    while(j<s.length){
        temp.push(s[j])
        if((j-i+1) < k){
            j++
        }else{
            // let ts = temp
            let ts = [...temp].sort().join(''); 
            if(ts === sortedAna){
                count++;
            }
            // console.log("tenp",temp)
            temp.shift();
            j++;
            i++;
        }
    }
    return count;

} 

// optimise -1

function countAnagrams1(s, ana) {
    let k = ana.length;
    
    // Create frequency map for anagram
    let anaFreq = {};
    for (let char of ana) {
        anaFreq[char] = (anaFreq[char] || 0) + 1;
    }
    
    // Sliding window with frequency map
    let windowFreq = {};
    let count = 0;
    let i = 0, j = 0;
    
    while (j < s.length) {
        // Add character to window
        let char = s[j];
        windowFreq[char] = (windowFreq[char] || 0) + 1;
        
        if ((j - i + 1) < k) {
            j++;
        } else {
            // Check if frequencies match
            if (JSON.stringify(windowFreq) === JSON.stringify(anaFreq)) {
                count++;
            }
            
            // Remove leftmost character
            windowFreq[s[i]]--;
            if (windowFreq[s[i]] === 0) {
                delete windowFreq[s[i]];
            }
            i++;
            j++;
        }
    }
    return count;
}

// optimise -2 
function countAnagrams2(s, ana) {
    let k = ana.length;
    
    // Frequency array for anagram
    let anaFreq = new Array(26).fill(0);
    for (let char of ana) {
        anaFreq[char.charCodeAt(0) - 97]++;
    }
    
    let windowFreq = new Array(26).fill(0);
    let count = 0;
    let i = 0, j = 0;
    
    while (j < s.length) {
        windowFreq[s[j].charCodeAt(0) - 97]++;
        
        if ((j - i + 1) < k) {
            j++;
        } else {
            // Direct array comparison (no JSON!)
            let isAnagram = true;
            for (let idx = 0; idx < 26; idx++) {
                if (windowFreq[idx] !== anaFreq[idx]) {
                    isAnagram = false;
                    break;
                }
            }
            
            if (isAnagram) {
                count++;
            }
            
            windowFreq[s[i].charCodeAt(0) - 97]--;
            i++;
            j++;
        }
    }
    return count;
}

// console.log(countAnagrams(s,ana))


measureTime(countAnagrams,s,ana)
measureTime(countAnagrams1,s,ana)
measureTime(countAnagrams2,s,ana)
// measureTime(printFirstNegative1, arr, k);