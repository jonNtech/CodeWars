String.prototype.toJadenCase = function () {
  let result = this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return result
};

//   OR

// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };
