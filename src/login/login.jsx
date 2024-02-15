import "./login.css"
import { useForm } from "react-hook-form"
import { useState } from "react";
import {Navar} from "../preguntas/preguntasInterface"


function Login(){

    //estos son los requerimientos o variables de el hook form que vamos a necesitar
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
//aqui va la funcion para mandar info a la base de datos
function enviar(nombre){
   
    window.localStorage.setItem("nombre",nombre.nombre)
    //doc hace referencia al documento anterior que se añade a la db
    if(nombre){
      return(
        // aqui es para que se redirija a otro apartado
        window.location.href = "/preguntas"
      )
    }
 
   
}

    return(
      <div>
<Navar/>
        <div className="loginform">
          <form onSubmit={handleSubmit(enviar)} className="logForm" >
            <label>
              <br/>
              Nombre
               <input className="inputLogin"
             type="text"
             placeholder="Ingresa tu nombre..."
             {...register("nombre", { required: true })}           
             />

            </label>
             {/*error viene de useForm*/}
            {errors.nombre && <p style={{color:"red",fontSize:"15px"}}>Este campo es requerido.</p>}
                {error && <p>{error}</p>}
            <p>Ingrese el nombre de quien realizara la prueva</p>

           
            <button className="btn1" type="submit">Enviar</button>
           
          </form>
        </div>
        </div>
    )

}
export default Login;