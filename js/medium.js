//& 1- Reverse Integer
var reverse = function (x) {
  let r = Number(Math.abs(x).toString().split("").reverse().join(""));

  return r > 2147483647 ? 0 : r * Math.sign(x);
};
console.log(reverse(-123));