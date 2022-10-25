// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!


function solve(arr) {
  let result = arr.map(sa =>[...new Set(sa)].length)
  return result.reduce((a,b) => a * b)
  
}

Console.log(solve([[1,2],[4],[5,6]]),4)


// OR

const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 ) ;

function solve(arr) {
  return arr.map(a => {
    let s = new Set();
    a.forEach(el => s.add(el));
    return s.size;
  })
    .reduce((out, n) => out * n, 1);
};
