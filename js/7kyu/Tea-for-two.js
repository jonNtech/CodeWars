function tea42(input) {
  let result = input.toString().split("").map(x => x == "2" ? "t" : x)
  return result.join("")
};



// OR

function tea42(input) {
 return input.toString().replace (/2/g, 't');
};



function tea42(input) {
  // your code
  return (''+input).split('2').join('t');
};
