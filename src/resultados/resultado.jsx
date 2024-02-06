import "./resultados.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">
            <button className="button">
  <svg className="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff342b" strokeLinecap="round" strokeWidth="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
  <span className="lable">Repetir</span>
</button>
            </Link>
            
        </div>
    );
}

export default Resultados;
