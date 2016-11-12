function objectObjsize(obj) {
  var osize = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) osize++;
  }
  return osize;
}

var man = {
  name: "Bob",
  sex: "Male",
  age: 30
};

var objsize = objectObjsize(man);
console.log('Size of the current object : ' + objsize);