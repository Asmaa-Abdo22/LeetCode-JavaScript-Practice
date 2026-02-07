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
// var romanToInt = function (s) {
//   const romanNumerals = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;

//   for (let i = 0; i < s.length; i++) {
//     const current = romanNumerals[s[i]];
//     const next = romanNumerals[s[i + 1]];

//     if (next > current) {
//       total -= current;
//     } else {
//       total += current;
//     }
//   }

//   return total;
// };
//& 4-  Longest Common Prefix
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";

//   let prefix = "";
//   // ["flower", "flow", "flight"]
//   for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] !== char) {
//         return prefix;
//       }
//     }

//     prefix += char;
//   }

//   return prefix;
// };
//& 5-  Running Sum of 1d Array
// var runningSum = function (nums) {
//   let runningSum = [];
//   runningSum.push(nums[0]);
//   for (let i = 1; i < nums.length; i++) {
//     runningSum.push(nums[i] + runningSum[i - 1]);
//   }
//   return runningSum;
// };
//& 6- Counter
// var createCounter = function (n) {
//   return function () {
//     return n++;
//   };
// };
// const counter = createCounter(5);

// console.log(counter());
// console.log(counter());
