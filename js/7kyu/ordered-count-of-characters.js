let orderedCount = function (text) {
  const split = text.split('');
  const str = [...new Set(split)];
  
  let result = [];
  
  for (let i = 0; i <= str.length-1; i += 1) {
    result.push([str[i], split.filter((s) => s === str[i]).length]);
  }
  
  return result;
}



const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));




var orderedCount = function (text) 
{
  var arr=[];
  for (var i=0; i<text.length; ++i)
  {
     var k=0;
     for (var j=0; j<arr.length; ++j)
        if (arr[j][0]==text[i])
            k++;
      if (k==0)
      {
        for (var j=i; j<text.length; ++j)
          if (text[j]==text[i])
             k++;
          arr.push([text[i],k]);
       }
  }
  return arr;

}
