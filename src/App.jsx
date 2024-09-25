import './index.css'
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';
function App() {


    const [inputValues,setinputValues]=useState({ //initiales starting value for user input values 
      'initialInvestment' : parseInt(0, 10) ,
      'annualInvestment' : parseInt(0, 10)  ,
      'expectedReturn' : parseInt(0, 10)  ,
      'duration' : parseInt(0, 10) ,
  })
  
      function handleInputChange(newInputValue,inputIdentifier){ //recieves a key and changes the value of that key in input values object
      setinputValues(previousInputValues => {
          return{
              ...previousInputValues , [inputIdentifier] : Number(newInputValue) 
      };
  });
  };
  
   
  return (
    <>
    <Header></Header> {/* sets the title and image */}
    <UserInput handleInputChange={handleInputChange} inputValues={inputValues}></UserInput> {/*sets the input box component */}
    <Results inputValues={inputValues}></Results> {/* sets the  results info based on the input values */}
    </>
  )
}

export default App
