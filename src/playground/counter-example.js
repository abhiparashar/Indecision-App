class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addClickOne = this.addClickOne.bind(this)
        this.minusClickOne = this.minusClickOne.bind(this)
        this.reset = this.reset.bind(this)
    }
    addClickOne(){
        console.log('add click One')
    }
    minusClickOne(){
        console.log('Minus Click One')
    }
    reset(){
        console.log('Reset')
    }
    render(){
        return(
            <div>
                <h1>Count :</h1>
                <button onClick={this.addClickOne}>+1</button>
                <button onClick={this.minusClickOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'))