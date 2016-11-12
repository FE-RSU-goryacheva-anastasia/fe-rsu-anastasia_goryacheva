function cleanTheArr(input) {
  
    var newArr = [];
    for (var i = 0; i < input.length; i++) {
      
        if (input[i]) {
            newArr.push(input[i]);
        }
    }
  
    return newArr;
}

console.log(cleanTheArr([NaN, 0, 15, false, -22, '', undefined, 47, null]));