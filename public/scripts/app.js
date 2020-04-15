"use strict";

console.log("app.js is running");

//jsx - javascript XML
var template = React.createElement("h1", null, "This is JSX from src/app.js");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
