"use strict";

console.log("app.js is running");

//jsx - javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item-1"
        ),
        React.createElement(
            "li",
            null,
            "Item-2"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Andrew Mead"
    ),
    React.createElement(
        "p",
        null,
        "Age-26"
    ),
    React.createElement(
        "p",
        null,
        "Location-Philadelphia"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
