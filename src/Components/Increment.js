import { Component } from "react";

class Test extends Component{

    constructor(){
        super()
        this.state ={
            number : 0,
        }
    }
    Increment(){
        this.setState({number:this.state.number +1})
    }
    Decrement () {
         this.setState({number:this.state.number -1})
    }
    render(){
        return(
            <>
            <h1>Increment And Decrement Number </h1>
            <h1>{this.state.number}</h1>
            <button onClick={()=>this.Increment()}>Increment</button>
            <button onClick={()=>this.Decrement()}>Decrement</button>
            </>
        )
    }
}
export default Test;