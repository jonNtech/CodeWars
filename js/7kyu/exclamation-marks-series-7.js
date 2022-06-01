const remove = str =>
  str
    .split(' ')
    .filter(w => w.split('!').length != 2)
    .join(' ');


// OR 

function removes(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}
