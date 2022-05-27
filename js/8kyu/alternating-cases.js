// for a prototye you have to use the [...this] or spread operator to get it to pass in.


String.prototype.toAlternatingCase = function () {
  return [...this].map(c => {
              if (c == c.toUpperCase()) {
                return c.toLowerCase()
              }
              else if(c == c.toLowerCase()) {
                return c.toUpperCase()
              }
              else { return c }}).join("")
    }
