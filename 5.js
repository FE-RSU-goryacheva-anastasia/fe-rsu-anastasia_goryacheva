var is_array = function(input) {
  if (toString.call (input) === "[object Array]")  
    return true;  
  return false;     
    };  
console.log(is_array("Anastasia"));
console.log(is_array([3, 6, 5, 9]));