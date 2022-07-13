function calc(x){
  let sum = n => [...n].reduce((a,b) => +a + +b);
  let total1 = x.replace(/./g, x => x.charCodeAt(0));
  let total2 = total1.replace(/7/g,'1');
  return sum(total1) - sum(total2);
}




function calc(x){
  return x
    .split('')
    .map(c => c.charCodeAt(0))
    .join('')
    .split('')
    .map(Number)
    .filter(x => x === 7)
    .length * 6
}
