camelize = function camelize(str) {  
      return str.replace(/\W+(.)/g, function(match, chr)  
       {  
            return chr.toUpperCase();  
        });  
    };  
  

console.log(camelize("Java Script"));

console.log(camelize("java-script"));

console.log(camelize("Java Script Exercises"));