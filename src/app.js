var app = {
    Title:"Indecision App",
    subTitle:"Put your life in the hands of computer",
    options:['one','two']
}
//jsx - javascript XML
var template = (
<div>
    <h1>{app.Title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options.length>0 ? 'Here are the options :' :'No options'}
    <ol>
    <li>Item-1</li>
    <li>Item-2</li>
    </ol>
</div>)

var user = {
userName : '',
userAge : '18',
userLocation : ''
}

const getLocation = (userLocation)=>{
    if (userLocation){
        return userLocation
    }else{
        return 'Somewhere from USA'
    }
}

var templateTwo = (
<div>
    <h1>Name :{user.userName ? user.userName : 'Someone from USA '}</h1>
    {(user.userAge && user.userAge >= 18) && <p>Age:{user.userAge}</p>}
    {getLocation(user.userLocation)}
</div>)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)