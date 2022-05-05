/**
 * @param {number[]} height
 * @return {number}
 */

// In this problem we are using the two pointer approach to calculate the maximum area 
 var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let maxArea = 0;
    while(end>start){
        let area = (end - start) * Math.min(height[start],height[end])
        maxArea = Math.max(area,maxArea)
        if(height[start]>height[end]){
            end--;
        }
        else{
            start++;
        }
    }
    return maxArea
};