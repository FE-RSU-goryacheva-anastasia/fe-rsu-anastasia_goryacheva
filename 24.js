var n = "5";
var z = "Anastasia";
function isNumeric(h) {
  return !isNaN(parseFloat(h)) && isFinite(h);
}
console.log(isNumeric(n));
console.log(isNumeric(z));
