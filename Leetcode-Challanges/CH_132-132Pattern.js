function find132pattern (nums){
    let n = nums.length;
    let i = j = k = 0;
    for (; i < n; i = j + 1) {
        while (i < n - 1 && nums[i] >= nums[i + 1]) i++; // if left is greater than right shift the loop and fix the i => To find 1
        j = i + 1;
        while (j < n - 1 && nums[j] <= nums[j + 1]) j++; // if left is smaller than right shifh the loop => to find 3
        k = j + 1;
        while (k < n) {
            if (nums[i] < nums[k] && nums[k] < nums[j]){
                return 1;
            }
            k++;
        }
    }
    return 0;
}

const find132patternMethod2 = (nums) => {
    let min = Number.MAX_SAFE_INTEGER;  // save i value
    let n = nums.length;
    for (let j = 0; j < n; j++) { //=>j=3/min=1/k=2
        min = Math.min(min, nums[j]); // 
        if (min == nums[j]) continue; // nums[i] overlaps nums[j], should be nums[i] < nums[j]
        for (let k = n - 1; k > j; k--) {
            if (min < nums[k] && nums[k] < nums[j]) return 1; //=>1<2 && 2<3
        }
    }
    return 0;
};

console.log(find132patternMethod2([-2,1,1,-2,1,2]));