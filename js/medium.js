//& 1- Reverse Integer
// var reverse = function (x) {
//   let r = Number(Math.abs(x).toString().split("").reverse().join(""));

//   return r > 2147483647 ? 0 : r * Math.sign(x);
// };
// console.log(reverse(-123));
//& 2- Longest Substring Without Repeating Characters
// var lengthOfLongestSubstring = function (s) {
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     let substr = "";

//     for (let j = i; j < s.length; j++) {
//       if (substr.includes(s[j])) {
//         break;
//       }

//       substr += s[j];
//       maxLength = Math.max(maxLength, substr.length);
//     }
//   }

//   return maxLength;
// };
//& 3- Find All Duplicates in an Array
// var findDuplicates = function (nums) {
//   const count = {};
//   const result = [];
//   for (let num of nums) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   for (let key in count){
//     if(count[key]===2){
//       result.push(Number(key))
//     }
//   }
//   return result
// };
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let digitsArr = digits.split("").map((item) => Number(item));
  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let resultArr = [];
  let increased = digitsArr.map((item) => phoneMap[item]); // ["abc", "def"]
  resultArr = increased[0].split("");  // ["a","b","c"]
  for (let i = 1; i < increased.length; i++) {
    let temp = [];
    for (let j = 0; j < resultArr.length; j++) {
      for (let k = 0; k < increased[i].length; k++) {
        temp.push(resultArr[j] + increased[i][k]);
      }
    }
    resultArr = temp;
  }

  return resultArr;
};
