import { useState, useEffect } from "react";

export default function RelojDigital(){

    const [hora, setHora] = useState( new Date().toLocaleTimeString() );

    useEffect( ()=>{
        console.log('El componente reloj se creo.');

        const intervalo = setInterval(()=>{
            setHora(  new Date().toLocaleTimeString() );
        }, 1000);

        return() => {
            console.log('El componente reloj murio');
            clearInterval(intervalo);
        };

    }, [] );

    return (
        <div style={{ background: '#1e293b', color: '#38bdf8', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '250px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>Hora Local</p>
            <h2 style={{ margin: '5px 0 0 0', fontSize: '2rem', letterSpacing: '2px' }}>
                {hora}
            </h2>
        </div>
    );
}