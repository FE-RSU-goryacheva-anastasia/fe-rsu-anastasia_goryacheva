function mergeArray(array) {

  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
        a.splice(j--, 1);
    }
  }

  return a;
}

var array1 = [1, 2, 3];
var array2 = [3, 4, 5];
var array3 = mergeArray(array1.concat(array2));

console.log(mergeArray(array3));