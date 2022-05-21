function sumOfDifferences(arr) {
    return arr
      .sort((a, b) => b - a)
      .reduce((acc, curr, index, array) => {
        const next = array[index + 1];
        if (!isNaN(curr - next)) {
          acc += curr - next;
        }
        return acc;
      }, 0);
  }

// OR

// function sumOfDifferences(arr) {
//     arr.sort((a, b) => a - b);
//     let b = 0;
//     for(let a = arr.length - 1; a > 0; a--) {
//       b += arr[a] - arr[a - 1];
//     }
//     return b;
//   }



console.log(sumOfDifferences([1, 2, 10]))