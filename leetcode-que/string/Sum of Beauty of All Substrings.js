// console.log("hello ")

let s = "aabcbaa"

var beautySum = function (s) {
  let totalBeauty = 0;
  
  // Iterate through all possible starting positions
  for (let i = 0; i < s.length; i++) {
    // Use a frequency map for the current substring
    let freq = {};
    
    // Iterate through all possible ending positions
    for (let j = i; j < s.length; j++) {
      // Add the new character to frequency map
      let char = s[j];
      console.log("char",char)
      freq[char] = (freq[char] || 0) + 1;
      
      // Calculate beauty for substring s[i..j]
      let maxFreq = Math.max(...Object.values(freq));
      let minFreq = Math.min(...Object.values(freq));
      
      // Only add to total if min frequency is > 0 (all chars appear at least once)
      if (minFreq > 0) {
        totalBeauty += maxFreq - minFreq;
      }
    }
  }
  
  return totalBeauty;
};

console.log(beautySum(s));
