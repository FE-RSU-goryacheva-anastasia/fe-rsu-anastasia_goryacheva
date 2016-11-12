function removeDuplicates(a) {
for (var i = 0; i < a.length; i++) {
var b = a[i];
for (var j = i + 1; j < a.length; j++) {
if (b == a[j]) {
a.splice(j--, 1);
}
}
}
return a;
}
console.log(removeDuplicates([1, 2, 4, 2, 6, 2, 2, 6, 2, 2]));
