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
//& 7- Counter II
// var createCounter = function (init) {
//   const original = init;
//   return {
//     increment: () => {
//       return ++init;
//     },
//     decrement: () => {
//       return --init;
//     },
//     reset: () => {
//       init = original;
//       return init;
//     },
//   };
// };
// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());
//& 8- Apply Transform Over Each Element in Array
// var map = function (arr, fn) {
//   let returnedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     returnedArray.push(fn(arr[i], i));
//   }
//   return returnedArray;
// };
// console.log(
//   map([1, 2, 3], function plusone(n) {
//     return n + 1;
//   }),
// );

//& 9- Filter Elements from Array
// var filter = function (arr, fn) {
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Boolean(fn(arr[i], i))) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// };
// console.log(
//   filter([0, 10, 20, 30], function greaterThan10(n) {
//     return n > 10;
//   }),
// );
//& 10- Array Reduce Transformation
// var reduce = function (nums, fn, init) {
//   let val = init;
//   if (nums.length === 0) {
//     return init;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }
//   return val;
// };
//& 11- To Be Or Not To Be
// var expect = function (val) {
//   return {
//     toBe: function (valToBe) {
//       if (val === valToBe) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//     notToBe: function (valNotToBe) {
//       if (val !== valNotToBe) {
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//   };
// };
// console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(5));
//& 12- Return Length of Arguments Passed
// var argumentsLength = function (...args) {
//   return args.length;
// };
// console.log(argumentsLength([{}, null, "3"]));
//& 13- Allow One Function Call
// var once = function (fn) {
//   let called = false;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       return fn(...args);
//     }
//     return undefined
//   };
// };
//& 14- Add Two Promises
// var addTwoPromises = async function (promise1, promise2) {
//   let val1 = await promise1;
//   let val2 = await promise2;
//   return val1 + val2;
// };
//& 15- Sleep
// async function sleep(millis) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, millis);
//   });
// }
//& 16- Timeout Cancellation
// var cancellable = function (fn, args, t) {
//   let timeoutId = setTimeout(() => {
//     fn(...args);
//   }, t);

//   const cancel = () => {
//     clearTimeout(timeoutId);
//   };

//   return cancel;
// };
//& 17- Interval Cancellation
// var cancellable = function(fn, args, t, cancelTimeMs) {
//   fn(...args);
//   const repeatCount = Math.floor(cancelTimeMs / t);
//   let count = 0;
//   const intervalId = setInterval(() => {
//     if (count >= repeatCount) {
//       clearInterval(intervalId);
//     } else {
//       fn(...args);
//       count++;
//     }
//   }, t);
//   const cancelFn = () => clearInterval(intervalId);
//   return cancelFn;
// };
// let cancel = cancellable((x) => console.log(x*2), [4], 35, 190);
// cancel()
//& 18- Sort By
// var sortBy = function (arr, fn) {
//   return arr.sort((a, b) => fn(a) - fn(b));
// };
//& 19- Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] < 10) {
      return digits;   
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
