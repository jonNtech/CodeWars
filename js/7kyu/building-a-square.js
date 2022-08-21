function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}



// OR


function generateShape(int){  
  var ans='';
  for (var i=0; i<int; ++i)
  {
    for (var j=0; j<int; ++j)
      ans+='+';
    if (i!=int-1)
      ans+='\n';
  }
  return ans;
}
