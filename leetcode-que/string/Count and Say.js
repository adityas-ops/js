


function generateNextTerm(str) {
  let result = "";
  let i = 0;
  
  while (i < str.length) {
    const currentChar = str[i];
    let count = 1;
    
    // Count how many consecutive identical characters we have
    while (i + count < str.length && str[i + count] === currentChar) {
      count++;
    }
    
    // Append count followed by the character to result
    result += count + currentChar;
    
    // Move pointer to the next different character
    i += count;
  }
  
  return result;
}

function countAndSay(n) {
  let result = "1";
  for (let i = 1; i < n; i++) {
    result = generateNextTerm(result);
  }
  return result;
}
