function Days () { 
var date1 = new Date("11/12/2016");
var date2 = new Date("11/17/2016");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
return(diffDays);
}  
console.log(Days ());