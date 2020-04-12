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

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component{
  handlePick(){
    alert('HandlePick')
  }
  render(){
    return(
      <div>
        <button onClick={this.handlePick}>What should I do ?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  removeAll(){
    alert('Remove all ')
  }
  render(){
    return(
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {this.props.options.map((option) => <p key={option} optionText={option}>{option}</p>)}
        <OptionOne/>
      </div>
    )
  }
}

class OptionOne extends React.Component{
  render(){
    return(
      // <div>Options Component Here</div>
      <div>
       Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOptions extends React.Component{
  handleAddOption(e){
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option){
      alert(option)
    }
  }
  render(){
      return(
        <div>
          <form onClick={this.handleAddOption}> 
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      )
  }
}
// const jsx = (
//   <div>
//     <Header />
//     <Action/>
//     <Options/>
//     <AddOptions/>
//   </div>
// )

// ReactDOM.render(jsx, document.getElementById('app'))
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))