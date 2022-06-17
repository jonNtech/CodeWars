function chain(input, fs) {
  for (let i = 0; i < fs.length; i++ ){
    input = fs[i](input)
  }
  return input
}


//  OR


// function chain(v, fns) {
//   return fns.reduce(function(v, fn) { return fn(v) }, v);
// }
