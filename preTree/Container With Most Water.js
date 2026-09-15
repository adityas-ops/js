
let height = [1,8,6,2,5,4,8,3,7]

// brute force apprach
var maxArea = function(height) {
    let maxi = -Infinity;
    for(let i =0; i<height.length;i++){
        let mm = -Infinity;
        for(let j = i+1;j<height.length;j++){
            let maxim = Math.min(height[i],height[j])*(j-i)
            mm = Math.max(mm, maxim);
        }
        maxi = Math.max(maxi, mm)
    }
    return maxi
};



var maxArea1 = function(height) {
 let left = 0, right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;

}

console.log(maxArea(height));
console.log(maxArea1(height));
