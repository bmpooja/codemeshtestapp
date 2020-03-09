import React,{Component} from 'react';
import './App.css';
import CounterComponent from './components/CounterComponent'

class App extends React.Component {
  state= {
    name : "khushi & Tanvi",
    theme :"lightgreen" , 
    no    : 1
  }
  setStateFunction=()=>{
     let newTheme = this.state.theme === "lightblue" ? "lightgreen" : "lightblue";
     return ({newTheme});
  }
  handleClick=()=>{ 
    //let newTheme = this.state.theme === "lightblue" ? "lightgreen" : "lightblue";
    const newT =(this.setStateFunction());
    this.setState({
      theme : newT.newTheme
    })
    console.log(this.state);  
  };
  render(){
  return (
    <div className="App">
     <h1>Bhatamrekar </h1>
     <button onClick = {this.handleClick}>toggle background</button>
     <p style = {{backgroundColor:this.state.theme}} > {this.state.name} </p>
     <CounterComponent  no={this.state.no}/>
    </div>
  );
}
}
export default App;
