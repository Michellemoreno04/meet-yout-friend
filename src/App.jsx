import React from "react"
import "./App.css"
import { Link } from 'react-router-dom'


 export function Presentacion (){

  return(<div className="presentacion">
    <h1>Quieres saber que tanto te conoce una persona?</h1>
    <p>Intenta meet you friend esta web te va a ayudar a saber que tanto una persona te conoce</p>
 
<Link to="/login">
<button className="btn1">Empezar</button>
</Link>
    </div>
  )
}
export default Presentacion;





