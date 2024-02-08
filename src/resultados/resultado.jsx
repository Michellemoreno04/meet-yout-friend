import "./resultados.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navar } from "../preguntas/preguntasInterface";
function Resultados() {
    //aqui vienen los datos por eso es datos es un array para que almacene todos los datos
    const [datos, setDatos] = useState([]);

// funcion para obtener datos de la db
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "usuarios"));
                //es donde se agregan los datos del (doc)
                const datosUsuarios = [];
                querySnapshot.forEach((doc) => {
                    datosUsuarios.push(doc.data());
                });
                setDatos(datosUsuarios);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        // aqui se llama a la funcion para que funcione
        obtenerDatos();
    }, []);
   
    return (
        <div>
            <Navar/>
            <h2>Resultados</h2>
            <table border={1} className="cuadro-resultados">
                <thead>
                    <tr>
                        <th className="table-name">Nombres</th>
                        <th>Puntuación</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.puntuacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            
        </div>
    );
}

export default Resultados;
