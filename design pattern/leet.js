
// 'U': Move up by 1 unit.
// 'D': Move down by 1 unit.
// 'L': Move left by 1 unit.
// 'R': Move right by 1 unit.
// '_':


let s = "L_D_"


maxDistance = function(moves) {
    let uC = 0;
    let dC = 0;
    let lC = 0;
    let rC = 0;
    let c = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i] === 'U'){
            uC++;
        }else if(s[i] === 'D'){
            dC++;
        }else if(s[i] === 'L'){
            lC++;
        }else if(s[i] === 'R'){
            rC++;
        }else{
            c++;
        }
    }
    return Math.abs(uC-dC)+Math.abs(rC-lC)+c
};

console.log(maxDistance(s))