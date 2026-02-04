//& 1-  Two Sum
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([2, 7, 11, 15],9))

//& 2-  isPalindrome
// var isPalindrome = function (x) {
//   let result = Number(x.toString().split("").reverse().join(""));
//   return x === result;
// };
// console.log(isPalindrome(121));

//& 3-  Roman to Integer
var romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanNumerals[s[i]];
    const next = romanNumerals[s[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
};
