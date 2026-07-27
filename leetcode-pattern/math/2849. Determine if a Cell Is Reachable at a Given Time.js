

let sx = 1, sy = 4, fx = 1, fy = 2, t = 1;

var isReachableAtTime = function(sx, sy, fx, fy, t) {
    dx = Math.abs(fx-sx);
    dy = Math.abs(fy-sy);
    console.log('dx',dx)
    console.log('dy',dy)
     if( dx === 0 && dy === 0 && t === 1 ) return false;
     if(Math.max(dx,dy) > t) return false
   
    return true
};


console.log(isReachableAtTime(sx, sy, fx, fy, t))



// 1,2
// 1,2 =>1


// 1,1
// 1,1 => 3

// 1, 3
// 1,3 => 0