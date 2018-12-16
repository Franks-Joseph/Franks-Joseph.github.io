//Variables and Parameters
var string = "Hello World";
var hr = "<hr>"
document.write(string);
document.write(hr);

//Loops
var a;
for (a = 0; a < 10; a++) {
  document.write(a);
}

document.write(hr)
//Conditional Statments
var b = 1;
var c = 5;

if (b < c) {
  document.write("under")
}else{
  document.write("over")
}

document.write(hr);
//Functions
var d = MyFunction();

function MyFunction() {
  var aa = 5;
  var bb = 6;
  document.write(aa + bb);
}
document.write(d);

document.write(hr);
//Array
var e = ["what","are","you","going","to","do"];
document.write(e[2]);

document.write(hr);
//Associative Arrays
var f = {key: "cycle", key1: "script", key2: "ball"}
document.write(f['key' + 2]);

/*Link for Associative Arrays
https://www.i-programmer.info/programming/javascript/1441-javascript-data-structures-the-associative-array.html
*/

