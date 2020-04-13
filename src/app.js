//Nested Components

class IndecisionApp extends React.Component{
  render(){
    const title = "Indecision App"
    const subtitle = "Don't Put your life in the hands of your computer"
    const options = ['Option One','Option Two','Option Three']
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOptions />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

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

const Action  = (props)=>{
  const handlePick = () =>{
    alert('handlePick')
  }
  return (
    <div>
      <button onClick={props.handlePick}>What should I do ?</button>
    </div>
  )
}

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

const Options = (props) => {
  const removeAll = () => {
    alert('Remove all')
  }
  return (
    <div>
      <button onClick={props.removeAll}>Remove All</button>
      {props.options.map((option) => <p key={option} optionText={option}>{option}</p>)}
      <OptionOne />
    </div>
  )
}

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

const OptionOne = (props) => {
  return (
    // <div>Options Component Here</div>
    <div>
      Option: {props.optionText}
    </div>
  )
}

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

const AddOptions = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
}

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
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))