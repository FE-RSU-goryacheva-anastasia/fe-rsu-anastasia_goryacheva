function Delete(array) { 
var index = array.indexOf(2);
if (index > -1) {
  array.splice(index, 1);
}
 return array;  
  }  
console.log(Delete([1,2,3,4,5]));  
