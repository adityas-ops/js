
// Input: words = ["leet","code"], x = "e"
// Output: [0,1]



// method - 1 - brute force 
var findWordsContaining = function(words, x) {
    let arr = new Set();
    for(let i = 0; i<words.length;i++){
          let s = words[i];
        for(let j = 0; j<s.length;j++){
            // console.log(s[j])
            if(s[j] === x){
                console.log(s[j])
                arr.add(i)
            }
        }
    }
    return [...arr]
};


// method - 2 - include method 
var findWordsContaining1 = function(words, x) {
    let ans = []
    for(let i = 0; i<words.length;i++){
        if(words[i].includes(x)){
            ans.push(i)
        }
    }
    return ans;
}

// method - 3 map() + filter() 


var findWordsContaining2 = function(words, x) {
    return words.map((item,index)=> item.includes(x) ? index:-1).filter((item)=>item !== -1)
}


// var findWordsContaining3 = function(words, x) {

// }



let words = ["leet","code"]
let x = "e"


console.log(findWordsContaining(words,x))
console.log(findWordsContaining1(words,x))
console.log(findWordsContaining2(words,x))
