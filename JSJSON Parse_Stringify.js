//Give something for JSON to parse.
console.log(JSON.stringify({Name: "Mark", Age: 45, Location: "Arizona"}));
console.log("Highlight the text above and use it");
console.log();

//JSON Parse
var strings = '{"Name": "Mark", "Age": 45, "Location": "Arizona"}'
var obj1 = JSON.parse(strings);
//name is understood as Mark because of the JSON.parse Method
console.log(obj1.Name);