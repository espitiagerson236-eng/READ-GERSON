import { Link } from 'react-router-dom';

export default function Usuarios(){
    return (
        <div>
            <h1> Lista de Usuarios </h1>
            <ul>
                <li> < Link to="/usuarios/101">Ver perfil juan perez</ Link></li>
                <li> < Link to ="/usuarios/205">Ver perfil Anna Gomez </Link></li>


            </ul>
        </div>
    )
}