var permuteUnique = function(nums) {
    const sorted = nums.sort((x,y) => x-y), permutations = [];

    const rcr = (arr, permutation,loopLevel) => {
        if (!arr.length) return permutations.push(permutation);

        let prev = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            console.log(arr,permutation,prev,i,loopLevel)
            if (prev === arr[i]) continue;

            newArr = arr.slice(0, i).concat(arr.slice(i+1));
            rcr(newArr, [...permutation, arr[i]],loopLevel+1);

            prev = arr[i];
        }
    }
    rcr(nums, [],1);

    return permutations;
};

console.log(permuteUnique([1,3,2]));