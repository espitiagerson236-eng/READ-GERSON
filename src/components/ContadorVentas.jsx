import { useState, useEffect } from 'react';

export default function ContadorVentas(){

    const [ventas, setVentas] = useState(()=>{
        const datoGuardado = localStorage.getItem('ventas');
        return datoGuardado ? parseInt(datoGuardado) : 0;
    });

    useEffect(()=>{
        localStorage.setItem('ventas', ventas);

        document.title = `ventas: ${ventas}`
        
        console.log(`Guardando automaticamente: Ventas = ${ventas}`);
    
    }, [ventas]);

    const registrarVenta = () => {
        setVentas(ventas + 1);
    }

    const reiniciar = () => {
        setVentas(0);
    }

    return(
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px' }}>
            <h3 style={{ margin: 0, color: '#64748b' }}>Ventas del dia</h3>
            <h1 style={{ fontSize: '3rem', margin: '10px 0', color: '#0f172a' }}>
                {ventas}
            </h1>

            <div style={{ display: 'flex', gap: '10px'}}>
                <button onClick={registrarVenta}>Nueva Venta</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </div>
    );
}