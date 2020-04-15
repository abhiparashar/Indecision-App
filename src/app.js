const app = {
    Title:"Indecision App",
    subTitle:"Put your life in the hands of computer",
    options:['one','two']
}
//jsx - javascript XML
const template = (
<div>
    <h1>{app.Title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options.length>0 ? 'Here are the options :' :'No options'}
    <ol>
    <li>Item-1</li>
    <li>Item-2</li>
    </ol>
</div>)

const user = {
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

const templateTwo = (
<div>
    <h1>Name :{user.userName ? user.userName : 'Someone from USA '}</h1>
    {(user.userAge && user.userAge >= 18) && <p>Age:{user.userAge}</p>}
    {getLocation(user.userLocation)}
</div>)

let count = 0
const addOne = () => {
    count++;
    renderCounterApp()
}
const minusOne = () =>{
    count--;
    renderCounterApp()
}
const reset = () =>{
    count=0;
    renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () =>{
    const templateThree = (
        <div>
            <h1>count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateThree, appRoot)
}
renderCounterApp()

