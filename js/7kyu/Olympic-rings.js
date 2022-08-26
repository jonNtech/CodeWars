function olympicRing(a){
  let count=0;
  a.split('').map(v=>/[abdegopqADOPQR]/.test(v)?count++:v==='B'?count+=2:count+=0)
  count=Math.floor(count/2)
  return count===2?'Bronze!':count===3?'Silver!':count>=4?'Gold!':'Not even a medal!'
}


// OR

const olympicRing = a =>
  (val => val <= 1 ? `Not even a medal!` : val < 3 ? `Bronze!` : val < 4 ? `Silver!` : `Gold!`)
  ([...a].reduce((pre, val) => pre + [`a`,`b`,`d`,`e`,`g`,`o`,`p`,`q`,`A`,`D`,`O`,`P`,`Q`,`R`].includes(val) + (val ===`B`) * 2 , 0) / 2 ^ 0);
