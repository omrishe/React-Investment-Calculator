
import {useState} from "react";
import InputBtn from './InputBtn.jsx';
import '../index.css';


export default function UserInput({handleInputChange,inputValues}) {


  return(
    <ul id='input-group'>
        <p>
      <InputBtn text={Object.keys(inputValues)[0]} handleInputChange={handleInputChange} ></InputBtn>
      <InputBtn text={Object.keys(inputValues)[1]} handleInputChange={handleInputChange}></InputBtn>
      </p>
      <InputBtn text={Object.keys(inputValues)[2]} handleInputChange={handleInputChange}></InputBtn>
      <InputBtn text={Object.keys(inputValues)[3]} handleInputChange={handleInputChange}></InputBtn>
      </ul>
  )
}