import './DashboardLayout.css';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

function DashboardLayout(){
    return(
        <div className='dashboard-contenedor'>
            <Sidebar />
            <div className='dashboard-derecha'>
                <TopNav />
                <main className='dashboard-contenido'>
                    <h1>Resumen General</h1>
                    <p>Bienvenido al Sistema</p>
                    <div className='tarjeta-prueba'>
                        <h3>Ventas del Dia</h3>
                        <h2>$1,250 USD</h2>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;