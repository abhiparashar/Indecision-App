console.log("App.js is runnig");

var userDetails = {
    title: "Abhishek Parashar",
    subTitle: "info about Abhishek Parashar",
    options: ['one', 'two']
};


//JSX  - javascript xml
var template = (
    <div>
        <h1>{userDetails.title}</h1>
        {/* <p>{userDetails.subTitle}</p> */}
        {userDetails.subTitle && <p>{userDetails.subTitle}</p>}
        {userDetails.options.length > 0 ? "Here are your options" : "No Options"}
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: 'andrew',
    age: 17,
    location: 'philadelphia'
}
function getLocation(location) {
    if (location) {
        return <p>Location:{user.location}</p>;
    } else {
        return undefined;
    }
}

var userName = 'mike'
var userAge = 29;
var userLocation = 'NewYork'
var templateTwo = (
    <div>
        {/* <h1>{userName.toUpperCase()}</h1> */}
        {/* <h1>{user.name}</h1> */}
        <h1>{user.name ? user.name : "Anonymous"}</h1>

        {/* <p>Age-{userAge}</p> */}
        {/* <p>Age-{user.age}</p> */}
        {user.age >= 18 && <p>age: {user.age}</p>}
        {/* <p>Location - {userLocation}</p> */}
        {/* <p>Location - {user.Location}</p> */}
        {/* <p>Location - {getLocation(user.Location)}</p> */}
        {getLocation(user.location)};
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
