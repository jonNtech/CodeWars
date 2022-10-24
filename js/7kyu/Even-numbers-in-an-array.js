function evenNumbers(array, number) {
  let arr = array.filter(n => n%2 ==0)
  return arr.slice(-number)
}



const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);



const isEven = n => n % 2 === 0;
const evenNumbers = (a, n) => a.filter(isEven).slice(-n);
