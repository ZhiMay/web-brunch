var fs = require("fs");
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
module.exports=result;
//exports.result=result;//var t=require("..");
//t.result;
//module.exports=result;
////var t=require("..");
//t 
//conmsole.log(result);

//exe the node command
//node helpers/createpage.js
//write a  file
