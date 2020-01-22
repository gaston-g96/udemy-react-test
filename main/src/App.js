import React from 'react';


// class App extends Component{
//   render(){
//     const input = 
//         <React.Fragment>
          
//           <label htmlFor = "bar">bar</label>
//           <input type="text" onChange={() => {console.log("I'm clicked!!")}}/>;
//         </React.Fragment>
//     return input;

//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )

}
const Cat = () => {
  return <h1>myaoh</h1>

}

export default App;
