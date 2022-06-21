function leastLarger(a,i) {
  let num = a[i]
  let arr = a.filter(x => x > num)
  let result = Math.min(...arr)
  return a.findIndex(x => x === result)
}

//OR

