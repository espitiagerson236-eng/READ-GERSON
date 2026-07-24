import './Hero.css';
import heroImg from '../assets/hero.png';

function Hero(){
    const titulo = "Soluciones Digitales para tu Negocio";
    const subtitulo = "Llevamos tu empresa al siguiente nivel";

    return(
        <section className='hero'>
            <div className='hero-text'>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
                <button className='hero-btn'>Empezar Ahora</button>
            </div>
            <div className='hero-image-container'>
                <img src={heroImg} alt="Imagen de prueba" className='hero-image' />
            </div>
        </section>
    );
};

export default Hero; 