import React from "react";
import "./styles.css";
class App extends React.Component{
  state= {
    name:1
  }
  update = () =>{
    for(let i = 0 ; i < 5 ; i++){
      this.setState((prevState)=>{
        return {
          name:prevState.name + 1,
        }
      })
    }
  }
  render(){
    return(
      <>
      <div>here</div>
      <div>{this.state.name}</div>
      <button
      onClick={()=>{
        this.update();
      }}
      >update</button>
      </>
    )
  }
}
export default App;
