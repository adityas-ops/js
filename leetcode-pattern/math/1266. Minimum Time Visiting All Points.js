

let points =[[3,2],[-2,2]]


var minTimeToVisitAllPoints = function(points) {
    
    let sum = 0;
    for(let i = 1; i<points.length;i++){
        let p1 = points[i-1];
        let p2 = points[i];
        sum+=Math.max(Math.abs(p1[0]-p2[0]),(Math.abs(p1[1]-p2[1])))
    }
    return sum
};

console.log(minTimeToVisitAllPoints(points))

// 