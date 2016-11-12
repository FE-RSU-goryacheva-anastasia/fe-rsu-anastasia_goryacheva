function Sum(array) {
  var sum=0;
  for(var i=0; i < array.length; i++){
  sum +=array[i];
  }
  return sum;
}
console.log(Sum([1, 2, 4, 6]))