"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Nested Components

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Don't Put your life in the hands of your computer";
      var options = ['Option One', 'Option Two', 'Option Three'];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOptions, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

// class Header extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

var Action = function Action(props) {
  var handlePick = function handlePick() {
    alert('handlePick');
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick },
      "What should I do ?"
    )
  );
};

// class Action extends React.Component{
//   handlePick(){
//     alert('HandlePick')
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.handlePick}>What should I do ?</button>
//       </div>
//     )
//   }
// }

var Options = function Options(props) {
  var removeAll = function removeAll() {
    alert('Remove all');
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.removeAll },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(
        "p",
        { key: option, optionText: option },
        option
      );
    }),
    React.createElement(OptionOne, null)
  );
};

// class Options extends React.Component{
//   constructor(props){
//     super(props)
//     this.removeAll = this.removeAll.bind(this)
//   }
//   removeAll(){
//     //alert('Remove all ')
//     console.log(this.props.options)
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.removeAll}>Remove All</button>
//         {this.props.options.map((option) => <p key={option} optionText={option}>{option}</p>)}
//         <OptionOne/>
//       </div>
//     )
//   }
// }

var OptionOne = function OptionOne(props) {
  return (
    // <div>Options Component Here</div>
    React.createElement(
      "div",
      null,
      "Option: ",
      props.optionText
    )
  );
};

// class OptionOne extends React.Component{
//   render(){
//     return(
//       // <div>Options Component Here</div>
//       <div>
//        Option: {this.props.optionText}
//       </div>
//     )
//   }
// }

var AddOptions = function AddOptions(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { onSubmit: props.handleAddOption },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
};

// class AddOptions extends React.Component{
//   handleAddOption(e){
//     e.preventDefault()
//     const option = e.target.elements.option.value.trim()
//     if(option){
//       alert(option)
//     }
//   }
//   render(){
//       return(
//         <div>
//           <form onSubmit={this.handleAddOption}> 
//             <input type="text" name="option" />
//             <button>Add Option</button>
//           </form>
//         </div>
//       )
//   }
// }
// const jsx = (
//   <div>
//     <Header />
//     <Action/>
//     <Options/>
//     <AddOptions/>
//   </div>
// )


// const User = (props)=>{
//   return(
//     <div>
//       <p>name :{props.name}</p>
//   <p>age :{props.age}</p>
//     </div>
//   )
// }

// ReactDOM.render(jsx, document.getElementById('app'))
// ReactDOM.render(<User name="abhishek" age={26}/>,document.getElementById('app'))
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
