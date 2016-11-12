function Random (array) { 
var item = array[Math.floor(Math.random() * array.length)];
return item;  
  }  
console.log(Random ([1,2,3,4,5]));