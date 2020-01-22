import React from 'react';
import PropTypes from 'prop-types';



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
  const profiles =[
    {name: "Taro", age : 22},
    {name: "hana", age : 10},
    {name: "noname"}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
      
    </div>
  )

}
const User = (props) => {
return <div>Hi I am { props.name }and{props.age}years!</div>
}
User.defaultProps ={
  age: 1
}

User.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
