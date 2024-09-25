import {useEffect} from "react"
import '../index.css'
import headerImg from '../assets/investment-calculator-logo.png'


export default function Header({appHandleInputChange,texts}) {
    return (
      <header id="header">
        <img src={headerImg}></img>
        <h1>React Investment Calculator</h1>
        </header>
    )
  }
  