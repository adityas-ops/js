
let ransomNote = "a", magazine = "b"

var canConstruct = function(ransomNote, magazine) {
    let mpMag = {};
    for(let i = 0; i<magazine.length;i++){
        mpMag[magazine[i]] = ( mpMag[magazine[i]] || 0)+1
    }
    for(let i = 0; i<ransomNote.length;i++){
        mpMag[ransomNote[i]] = (mpMag[ransomNote[i]] || 0)-1;
        if(mpMag[ransomNote[i]]<0){
            return false
        }
    }
    return true
};

console.log('ans',canConstruct(ransomNote,magazine));
