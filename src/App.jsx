import './index.css'
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';
function App() {
  const [input,setinput]=useState( [
    {'Inital investment': '0' },
    {'Annual Investment' : '0'},
    {'Expected Return' : '0'},
    {'Duration' : '0'}])


    const [inputValues,setinputValues]=useState({
      'Initial investment' : 0,
      'Annual Investment' : 0 ,
      'Expected Return' : 0 ,
      'Duration' : 0,
  })
  
      function handleInputChange(newInputValue,inputIdentifier){
      console.log(newInputValue)
      console.log(inputIdentifier)
      setinputValues(previousInputValues => {
          return{
              ...previousInputValues , [inputIdentifier] : {newInputValue} 
      };
  });
  };
  
   
  return (
    <>
    <h1>React Investment Calculator</h1>
    <Header></Header>
    <UserInput handleInputChange={handleInputChange}></UserInput>
    <Results></Results>
    </>
  )
}

export default App
