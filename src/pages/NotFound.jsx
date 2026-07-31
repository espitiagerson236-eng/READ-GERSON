import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Error 404</h1>
            <p>La pagina que buscas no existe en este Dashboard</p>
            <link to="/" stryle={{color: '#38bdf8'}}>Volver al Inicio</link>
        </div>
    );
}