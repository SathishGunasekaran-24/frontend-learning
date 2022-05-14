/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];

  const combinationSum = (combinationArray, arraySum) => {
    for (let i = 1; i < 10; i++) {
      if (combinationArray.length === k - 1) {
        if (n === arraySum + i) {
          combinationArray.push(i);
          result.push([...combinationArray]);
        }
      } else if (combinationArray.length < k) {
        for (j = i + 1; j < 10; j++) {
          let sum = 0;
          if (i === j) {
            continue;
          }
          combinationArray.push(j);
          combinationArray.forEach((x) => {
            sum = sum + parseInt(x);
          });
          combinationSum(combinationArray, sum);
        }
      }
    }
  };
  combinationSum([], 0);
  return result;
};

console.log(combinationSum3(3, 7));
