
import {useState} from "react";
import InputBtn from './InputBtn.jsx';
import '../index.css';


export default function UserInput({handleInputChange,UserInput}) {


  return(
    <ul id='input-group'>
        <p>
      <InputBtn text='Initial investment' handleInputChange={handleInputChange} ></InputBtn>
      <InputBtn text='Annual Investment'handleInputChange={handleInputChange}></InputBtn>
      </p>
      <InputBtn text='Expected Return'handleInputChange={handleInputChange}></InputBtn>
      <InputBtn text='Duration'handleInputChange={handleInputChange}></InputBtn>
      </ul>
  )
}