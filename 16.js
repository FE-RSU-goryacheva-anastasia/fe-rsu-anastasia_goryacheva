function Bubble(array) { 
var i;
i=array[1];
array[1]=array[3];
array[3]=i;
return array;  
  }  
console.log(Bubble([1,4,3,2,5]));  