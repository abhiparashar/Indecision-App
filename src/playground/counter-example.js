class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addClickOne = this.addClickOne.bind(this)
        this.minusClickOne = this.minusClickOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count:0
        }
    }
    addClickOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count+1
            }
        })
    }
    minusClickOne(){
        this.setState((prevState)=>{
            return {count: prevState.count-1}
        })
    }
    reset(){
        this.setState(()=>{
            return {
                count:0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.addClickOne}>+1</button>
                <button onClick={this.minusClickOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'))