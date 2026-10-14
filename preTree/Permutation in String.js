let s1 = "ab", s2 = "eidboaoo"


var checkInclusion = function(s1, s2) {
     let s = s1.split("").sort().join("")
     let big = s2.split("").sort().join("")
     let aa = big.includes(s)
     console.log("s1",s)
      console.log("s2",big)
     console.log("aa",aa)
};

console.log('====================================');
console.log(checkInclusion(s1,s2));
console.log('====================================');