var FindFunction = function(func, arr) {
 func = func.filter(v=>typeof v==='function')
  return arr.filter(v=>func[0](v))
}



var FindFunction = function(func, arr) {
  return arr.filter(func.filter((c) => typeof c === 'function')[0]);
}
