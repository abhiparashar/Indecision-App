console.log("app.js is running")

//jsx - javascript XML
var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
    <li>Item-1</li>
    <li>Item-2</li>
    </ol>
</div>)

var userName = 'mike'
var age = 29,
var location = 'New York'

var templateTwo = (
<div>
    <h1>{userName}</h1>
    <p>{age}</p>
    <p>{location}</p>
</div>)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)