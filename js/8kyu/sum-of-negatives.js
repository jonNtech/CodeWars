// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
  if (!input) return []
  if (input == 0) return []
  if (input == null) return []
  let answer = []  
  let posNum = input.filter(x => x > 0)
  let negNum = input.filter(x => x < 0)
  if (posNum == [] || posNum == null){
    return answer.push(0)
  } else {
    answer.push(posNum.length)
  }
  if (negNum == [] || negNum == null){
    return answer.push(0)
  } else{
  answer.push(negNum.reduce((a,b)=> a + b))
  }
  return answer;
}



//   OR

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
