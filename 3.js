var array = [1,2,3,4,5];
function Reverse1(){
i = array.length;
while (i >0) {
  i--;
  console.log(array[i]);
}
 return array;
}
Reverse1();

function Reverse2(){
i=array.length;	
do {
i--;
console.log(array[i]);
} 
while (i > 0);
 return array;
}
Reverse2();

function Reverse3(){
for(var i=array.length-1; i>=0; i--){
	console.log(array[i]);
  
}
   return array;
}
Reverse3();