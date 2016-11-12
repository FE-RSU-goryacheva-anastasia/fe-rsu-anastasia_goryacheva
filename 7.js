function mostFrequent(a) {
var max = 0;
var maxPosition;

for (var i = 0; i < a.length; i++) {
var count = 0;

for (var j = i; j < a.length; j++) {
if (a[i] == a[j]) {
count++;
}
}

if (count > max) {
max = count;
maxPosition = i;
}
}

return a[maxPosition];
}

console.log(mostFrequent([1, 3, 5, 3, 7, 2, 5, 3, 5, 3, 4]));


