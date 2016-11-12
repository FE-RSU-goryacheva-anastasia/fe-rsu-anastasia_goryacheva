var getKeys = function(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
};

console.log(getKeys({
  name: "Bob",
  sex: "Male",
  age: 30
}));