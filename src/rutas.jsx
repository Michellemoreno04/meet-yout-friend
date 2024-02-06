import { BrowserRouter as Router, Route,Link, Routes} from 'react-router-dom'
import Presentacion from './App'
import PreguntasInterface from './preguntas/preguntasInterface';
import Login from './login/login';
import Resultados from './resultados/resultado';



function Rutas(){
    return(
        <div>


            <Router>
                <Routes>
              <Route path='/' Component={Presentacion}/>
              <Route path='/login' Component={Login}/>
              <Route path='/preguntas' Component={PreguntasInterface}/>
              <Route path='/resultados' Component={Resultados}/>
             
              </Routes>
              
            </Router>
        </div>
    )
}

export default Rutas;