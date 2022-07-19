function heron(a,b,c) {
  let base = (a+b+c)/2
  let result = Math.sqrt(base * (base-a)*(base-b)*(base-c))
  return result;
}




function heron( ...$ ) {
  $ = [...$]
  let S = ( $[0] + $[1] + $[2] ) / 2
  return +Math.sqrt( S * (S - $[0]) * (S - $[1]) * (S - $[2]) ).toFixed(2)
}
