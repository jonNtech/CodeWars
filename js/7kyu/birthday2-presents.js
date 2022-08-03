function present(x, y){
  if (x==='badpresent') return'Take this back!'
  if (x==='dog') return  `pass out from excitement ${y} times`
  if (x==='crap') return 'acpr'
  if (x==='empty') return 'empty'
  if (x==='bang') return x.split('').reduce((a,b)=>a+(b.charCodeAt()-y),0)
  return x.split('').map(v=>String.fromCharCode(v.charCodeAt()+y)).join('')
}

const present = (x, y) => {
    switch (x) {
        case 'goodpresent': return x.split``.map(i => String.fromCharCode(i.charCodeAt()+y)).join`` 
        case 'crap': case 'empty': return x.split``.sort().join``
        case 'bang': return x.split``.map(i => i.charCodeAt()-y).reduce((a, b) => a + b, 0)
        case 'badpresent': return 'Take this back!'
        case 'dog': return `pass out from excitement ${y} times`
    }
}
