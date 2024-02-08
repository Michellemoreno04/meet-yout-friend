import React from "react"
import "./App.css"
import { Link } from 'react-router-dom'
import {Navar} from "./preguntas/preguntasInterface"

 export function Presentacion (){

  return(
    <div>
       <Navar/>
   
  <div className="presentacion">
   
    <h1>Quieres saber que tanto te conoce una persona?</h1>
    <p>¡Bienvenido a "Meet your friend"! Esta es una aplicación web divertida 
      y entretenida que te permite medir cuánto conoces a tus amigos mediante una serie de preguntas y respuestas.
      
      
      </p>
 
<Link to="/login">
<button className="btn1">Empezar</button>
</Link>
    </div>
    </div>
  )
}
export default Presentacion;





