// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let result = marks.reduce((a,b) => a+b)
  return Math.floor(result/marks.length)
}


function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


