import "./preguntas.css";
import preguntas from "./preguntas";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import MYF from "../imagenes/MYF.png"
import { Link,useNavigate} from "react-router-dom";
import 'animate.css';





function PreguntasInterface() {
  // para escuchar cuando se cambie la pregunta
  const [preguntaActual, setPreguntaActual] = useState(0);
  // para ver la puntuacion de de la pregunta
  const [puntuacion, setPuntuacion] = useState(0);
  // para saber si el juego termino
  const [isFinish, setIsFinish] = useState(false);
  // para almacenar preguntas en orden aleatorio
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  // para almacenar respuestas en orden aleatorio
  const [respuestasAleatorias, setRespuestasAleatorias] = useState([]);

// useNavigate como usehistory es para redirecciones
  const history = useNavigate();

  useEffect(() => {
    // Mezclar las preguntas y respuestas de forma aleatoria al cargar el componente
    const preguntasAleatorias = [...preguntas].sort(() => Math.random() - 0.5);
    setPreguntasAleatorias(preguntasAleatorias);
  }, []);

  useEffect(() => {
    // Mezclar las respuestas de la pregunta actual
    if (preguntasAleatorias.length > 0) {
      const opcionesAleatorias = [...preguntasAleatorias[preguntaActual]?.opciones].sort(() => Math.random() - 0.5);
      setRespuestasAleatorias(opcionesAleatorias);
    }
  }, [preguntaActual, preguntasAleatorias]);

  // Función para cambiar de pregunta
  const cambiarPregunta = (isCorrect) => {
    // añadir puntuacion
    if (isCorrect){
      setPuntuacion((prevPuntuacion) => prevPuntuacion + 1)

    } 


    // cambiar a la siguiente pregunta
    if (preguntaActual === preguntasAleatorias.length - 1) {
      setIsFinish(true);
      
      
      Swal.fire({
        title: "Good job!",
        text: "Haz completado el formulario!",
        icon: "success",
        showCancelButton: false, // Oculta el botón de cancelar
        confirmButtonText: "Ver Resultado", // Cambia el texto del botón de confirmación
        showLoaderOnConfirm: true, // Muestra un loader al confirmar
        preConfirm: () => {
          // Función que se ejecuta antes de cerrar el modal
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000); // Simula una espera de 2 segundos antes de redireccionar
          }).then(()=>{
            const nombre = window.localStorage.getItem("nombre")
            const puntuaciones = window.localStorage.getItem("puntuacion")
                
                if (nombre && puntuaciones) {
                  const nameUser = collection(db, "usuarios");
        
                  // Objeto con la información a guardar en la base de datos
                  const data = {
                    nombre: nombre,
                    puntuacion: puntuacion + (isCorrect ? 1 : 0),
                  };
        
                  addDoc(nameUser, data).then(() => {
                    
                     history("/resultados")
                     
                  });
                }
          })
          
        },
        
      })
      
      
          // Verificar si tenemos tanto nombre como puntuaciones antes de realizar la inserción en la base de datos
   
    
      
      // Resto del código para mostrar el resultado y guardar en la base de datos...
    } else {
      setPreguntaActual((prevPreguntaActual) => prevPreguntaActual + 1);
    }
  };

  return (
    <div>
      <Navar/>
    
    <div className="preguntas">
      
      <h1 className="animate__animated animate__backInLeft">{preguntasAleatorias[preguntaActual]?.pregunta}</h1>

      <div className="respuestas">
        {respuestasAleatorias.map((x) => (
          <button
            className="btn-respuestas"
            key={x.respuestas}
            onClick={() => cambiarPregunta(x.isCorrect)}
          >
            {x.respuestas}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export function Navar(){
  return(
    <nav className="nav">
      <img src={MYF} alt=""  className="logo"/>
      <ul>
        <Link to="/">
        <li>Inicio</li>
        </Link>
      <Link to="/resultados">
      <li>Resultados</li>
      </Link>
        
      </ul>
    </nav>
  )
}
export default PreguntasInterface;
