var date=new Date();
var NY=new Date(date.getFullYear(), 11, 31);
if (date.getMonth()==11 && date.getDate()>31) 
{
NY.setFullYear(NY.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((NY.getTime()-date.getTime())/(one_day))+
" days left until new year!");