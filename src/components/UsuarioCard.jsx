import './UsuarioCard.css';
import { useState } from 'react';

export default function UsuarioCard({ nombre, rol, estado, imagen }){

    const [Siguiendo, setSiguiendo] = useState(false);

    const claseEstado = estado === 'Activo' ? 'badge-activo' : 'badge-inactivo';

    const alternarSeguimiento = () => { 
        setSiguiendo(!Siguiendo);
    }

    return(
        <div className='usuario-card'>
            <img src={imagen} alt={`Foto de ${nombre}`} className='usuario-img'/>

            <div className='usuario-info'>
                <h3>{nombre}</h3>
                <p className='usuario-rol'>{rol}</p>
                <span className={`usuario-badge ${claseEstado}`}>{estado}</span>
            </div>

            <div className='usuario-acciones'>
                <button onClick={alternarSeguimiento}
                    style={{ Background: Siguiendo ? '#00fbff' : '#3ef838', color: Siguiendo ? '#0037ff' : 'white'}}>
                    {Siguiendo ? 'Siguiendo' : 'Seguir'}
                </button>
            </div>
        </div>
    );
}