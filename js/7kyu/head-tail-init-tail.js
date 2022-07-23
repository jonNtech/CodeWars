const head = array => array[0]

const tail = array => array.slice(1)

const init = array => array.slice(0, - 1)

const last = array => array[array.length - 1]






function head(array) {
  return array[0];
}
function tail(array) {
  return array.slice(1);
}
function init(array) {
  return array.slice(0, -1);
}
function last(array) {
  return array[array.length-1];
}
