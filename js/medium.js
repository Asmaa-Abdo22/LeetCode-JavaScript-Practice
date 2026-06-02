//& 1- Reverse Integer
// var reverse = function (x) {
//   let r = Number(Math.abs(x).toString().split("").reverse().join(""));

//   return r > 2147483647 ? 0 : r * Math.sign(x);
// };
// console.log(reverse(-123));
//& 2- Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let substr = "";

    for (let j = i; j < s.length; j++) {
      if (substr.includes(s[j])) {
        break;
      }

      substr += s[j];
      maxLength = Math.max(maxLength, substr.length);
    }
  }

  return maxLength;
};
