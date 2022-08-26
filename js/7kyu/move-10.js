function moveTen(s){
   const alpha='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
   const arr = s.split('').map(val => val = alpha.indexOf(val) + 10)
   return arr.map(val => val = alpha[val]).join('')
}


//OR


function moveTen(s){
  return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                                ? String.fromCharCode(e.charCodeAt(0) - 16) 
                                : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}
