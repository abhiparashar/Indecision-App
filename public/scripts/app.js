"use strict";

var app = {
    Title: "Indecision App",
    subTitle: "Put your life in the hands of computer",
    options: ['one', 'two']
    //jsx - javascript XML
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.Title
    ),
    app.subTitle && React.createElement(
        "p",
        null,
        app.subTitle
    ),
    app.options.length > 0 ? 'Here are the options :' : 'No options',
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

var user = {
    userName: '',
    userAge: '18',
    userLocation: ''
};

var getLocation = function getLocation(userLocation) {
    if (userLocation) {
        return userLocation;
    } else {
        return 'Somewhere from USA';
    }
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name :",
        user.userName ? user.userName : 'Someone from USA '
    ),
    user.userAge && user.userAge >= 18 && React.createElement(
        "p",
        null,
        "Age:",
        user.userAge
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
