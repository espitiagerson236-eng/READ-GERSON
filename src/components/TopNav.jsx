import './TopNav.css';

function TopNav(){
    const usuarioActual = "Juan Perez";

    return(
        <header className='topnav'>
            <div className='buscador'>
                <input type="text" className='input-buscar' placeholder='Buscar' />
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🔔</span>
                <div className='avatar'>JP</div>
                <span className='nombre-usuario'>Hola, {usuarioActual}</span>
            </div>
        </header>
    );
}

export default TopNav;