import React, { Component } from 'react'

class CounterComponent extends Component {
    constructor(){
        super();
        this.state={
            counter : 1
        }

    }
    clickHandler=()=>{
        this.setState({
           counter: this.state.counter+1
        })
        console.log("clicked");
        console.log(this.state.counter);
    }
    render(){
    return(
        <div>
            <button onClick={this.clickHandler}>+</button>
            <p>{this.state.counter}</p>
        </div>
    )
    }
}

export default CounterComponent;
