function DNAStrand(dna){
  let arr = dna.toUpperCase().split("")
  let result = []
  for (let i = 0; i < arr.length; i++){
    if(arr[i] == "A") {
      result.push("T")
    } else if(arr[i] == "T") {
      result.push("A")
    } else if(arr[i] == "C") {
      result.push("G")
    } else if(arr[i] == "G") {
      result.push("C")
    }
  }
  return result.join("")
}




var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}






let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
