// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
  let oddArr = array.filter(x => x %2 !== 0).sort((a,b)=> a-b)
  return array.map(x => x%2 ==0 ? x : oddArr.shift())
}




///

function sortArray(array) {
  if(array.length == 0) {
    return array;
  }

  for(var i=0;i<array.length-1;i++)
  {
    for(var j = i; j < array.length; j++)
    {
      if((array[i] != 0) && (array[i] % 2 != 0) &&
        (array[j] != 0) && (array[j] % 2 != 0))
        {
          if(array[i] > array[j])
          {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
    }
  }
  
  return array;
}
