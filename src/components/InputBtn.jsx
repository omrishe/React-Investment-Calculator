import {useState} from "react"
import '../index.css'

export default function InputBtn({text,handleInputChange})
{
    const [value,setValue]=useState(0);
    
    return(
        <>
        <label id='user-input label'>{text}</label>
        <input  id= "user-input" type="Number" onChange={textEditing} value={value}></input>
        </>
    )


    function textEditing(event)
  {
    const newInputValue=event.target.value
    setValue(newInputValue); //prevents possible error with use effect when direcly changing state 
    handleInputChange(newInputValue,text)
  }
}