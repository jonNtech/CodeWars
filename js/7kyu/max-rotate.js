function maxRot(n) {
    var str = n.toString();
    var arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}


// OR


function maxRot(n){
  let max = n
  let arr = String(n).split('')
  for(let i = 0; i < arr.length; i++){
    arr.push(arr.splice(i,1))
    const num = Number(arr.join(''))
    if(num > max) max = num
  }
  return max
}
