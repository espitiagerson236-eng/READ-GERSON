import './Servicios.css';
import ServicioCard from '../components/ServicioCard';

function Servicios(){
    const seccionTitulo = "Nuestras Soluciones";
    const seccionSubtitulo = "Impulsa tu negocio con tecnologia de ultima generacion";

    return(
         <section className='servicios-contenedor'>
            <div className='servicios-header'>
                <h2 className='servicios-titulo'>{seccionTitulo}</h2>
                <p className='servicio-subtitulo'>{seccionSubtitulo}</p>
            </div>
            <div className='servicios-grid'>
                <ServicioCard />
                <ServicioCard />
                <ServicioCard />
            </div>
         </section>
    );
}

export default Servicios;