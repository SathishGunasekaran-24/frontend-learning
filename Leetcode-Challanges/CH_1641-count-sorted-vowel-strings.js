/**
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {
  function count(n, char) {
      if (n === 0) {
          return 1;
      }
      
      let sum = 0;
      
      while (char <= 5) {
          sum += count(n - 1, char);
          char++;
      }
          
      return sum;
  }
  
  return count(n, 1);
};

console.log(countVowelStrings(33));
