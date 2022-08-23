function maxMultiple(divisor, bound){
  let mult = Math.floor(bound/divisor)
  return mult*divisor
}



//OR



function maxMultiple(divisor, bound){
  return bound-bound%divisor
}
