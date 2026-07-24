
const measureTime = require('../../helper')

let points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4],]



var useExpression = function(p1,p2,p3){
    let x1 = p1[0], y1 = p1[1]
    let x2 =  p2[0], y2 = p2[1]
    let x3 = p3[0], y3 = p3[1];

    return ((y3-y2)*(x2-x1) === (y2-y1)*(x3-x2))
}
// o(n^3)
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    const isCollinear = (p1, p2, p3) => {
        return (p2[1]-p1[1]) * (p3[0]-p2[0]) === (p3[1]-p2[1]) * (p2[0]-p1[0]);
    };

    let max = 2;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            // every pair (i,j) defines a new line direction
            let count = 2;

            for (let k = j + 1; k < points.length; k++) {
                // check if k lies on the line defined by i and j
                if (isCollinear(points[i], points[j], points[k])) {
                    count++;
                }
            }

            max = Math.max(max, count);
        }
    }

    return max;
};


// o(n^2)

var maxPoints1 = function(points) {
    if (points.length <= 2) return points.length;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let max = 2;

    for (let i = 0; i < points.length; i++) {
        const map = new Map();

        for (let j = i + 1; j < points.length; j++) {
            let dy = points[j][1] - points[i][1];
            let dx = points[j][0] - points[i][0];

            // normalize sign — always make dx positive
            if (dx < 0) { dx = -dx; dy = -dy; }
            if (dx === 0) dy = 1;  // vertical line
            if (dy === 0) dx = 1;  // horizontal line

            // reduce fraction by gcd
            const g = gcd(Math.abs(dy), Math.abs(dx));
            const key = (dy/g) + ',' + (dx/g);

            map.set(key, (map.get(key) || 1) + 1);
            max = Math.max(max, map.get(key));
        }
    }

    return max;
};


// console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])); // 3

console.log(maxPoints(points))
console.log(maxPoints1(points))

measureTime(maxPoints,points)
measureTime(maxPoints1,points)