

let coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]

function isSLop(p1,p2,p3){
    let x1 = p1[0], y1=p1[1]
     let x2 = p2[0], y2=p2[1]
      let x3 = p3[0], y3=p3[1]

      return ((y3-y2)*(x2-x1) === (x3-x2)*(y2-y1))
}

var checkStraightLine = function(coordinates) {
     coordinates.sort((a,b)=>(a[0]-b[0] || a[1]-b[1]))
    for(let i =2; i<coordinates.length;i++){
        if(isSLop(coordinates[i-2],coordinates[i-1],coordinates[i]) !== true){
            return false;
        }
    }
    return true;
};

console.log(checkStraightLine(coordinates))