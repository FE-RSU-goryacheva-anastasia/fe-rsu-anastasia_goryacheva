var Calculator = function() { 
  var value = 0;
  this.add = function(x) {
		value += x;
		return this;
	};

    this.multiply = function(x) {
		value *= x;
		return this;
	};

	this.subtract = function(x) {
		value -= x;
		return this;
	};

	this.divide = function() {
		value /= x;
		return this;
	};
  
	this.getResult = function(){
		return value;  
	};
	
	this.reset = function() {
		value = 0;
		return this;
	};
	
	this.getInitialState = function (callback) {
		setTimeout(function ()
			{
			callback();
			}, 500);
    };
 
};

var calc = new Calculator()
console.log(calc.getResult()); 

var calc = new Calculator()
console.log(calc.add(1).getResult());

var calc = new Calculator()
console.log(calc.add(4).reset().add(1).getResult());

var calc = new Calculator()
console.log(calc.multiply(2).add(3).getResult());

var calc = new Calculator()
calc.getInitialState(function() {
console.log("Server answered");
});