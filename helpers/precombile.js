var fs = require("fs");
var path =require("path");
//var BUILD_PATH = path.join(__dirname,"./output");
var Handlebars = require('handlebars');
var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
  "{{kids.length}} kids:</p>" +
  "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var data = {
  "name": "Alan",
  "hometown": "Somewhere, TX",
  "kids": [{ "name": "Jimmy", "age": "12" }, { "name": "Sally", "age": "4" }]
};
var template = Handlebars.compile(source);
var result = template(data);

function createpage(data, filepath) {
  fs.writeFile(filepath, result, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
var filedir=path.join(__dirname,"../public/");
var filepath=filedir + "test.html";
console.log("哈哈");
createpage(result,filepath);
console.log("巴啦啦");
// module.exports = result;
