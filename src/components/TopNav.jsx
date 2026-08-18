import BuscadorEnVivo from './BuscadorEnVivo';
import './TopNav.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FavoritosContext } from '../context/FavoritosContext';
import { Link } from 'react-router-dom';

function TopNav(){
    const {usuario} = useContext(AuthContext);
    const {favoritos} = useContext(FavoritosContext);

    return(
        <header className='topnav'>
            <div className='buscador'>
                <BuscadorEnVivo />
            </div>
            <div className='perfil-usuario'>
                <Link to='/mis-favoritos' style={{textDecoration: 'none',
                    background: '#f1f5f9',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    color: '#0f172a',
                    fontWeight: 'bold'
                }}>
                    Favoritos: <span style={{ color: '#ef4444'}}>{favoritos.length}</span>
                </Link>
                {usuario.conectado ? (
                    <>
                        <div className='avatar'>(usuario.nombre.charAT(0))</div>
                        <span className='nombre-usuario'>Hola, {usuario.nombre}</span>
                        <span className='rol-badge' style={{ fontSize: '10px', background: '#e2e8f0', padding: '3px', borderRadius: '5px' }}>
                            {usuario.rol}
                        </span>
                    </>
                    ) : (
                        <span className="nombre-usuario" style={{ color: 'red' }}>🔴 Desconectado</span>
                    )
                }
            </div>
        </header>
    );
}

export default TopNav;