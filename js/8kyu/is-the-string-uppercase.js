String.prototype.isUpperCase = function() {
  return [...this].toString() === [...this].toString().toUpperCase() ? true: false
}


// OR 

//     String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
