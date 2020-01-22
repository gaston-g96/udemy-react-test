import React, { Component } from 'react';


class App extends Component{
  render(){
    const input = 
 
        <React.Fragment>
          
          <label htmlFor = "bar">bar</label>
          <input type="text" onChange={() => {console.log("I'm clicked!!")}}/>;
        </React.Fragment>
    return input;

  }
}

export default App;
